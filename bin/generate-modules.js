const fs = require('fs-extra');

console.log('generate-modules');

const replaceStart =
  '<!-- Autogenerate in https://github.com/renovatebot/renovatebot.github.io -->';
const replaceStop = '<!-- Autogenerate end -->';

function capitalize(input) {
  console.log(input);
  return input[0].toUpperCase() + input.slice(1);
}

function formatName(input) {
  return input
    .split('-')
    .map(capitalize)
    .join(' ');
}

function getDisplayName(moduleName, moduleDefinition) {
  return moduleDefinition.displayName || formatName(moduleName);
}

function getNameWithUrl(moduleName, moduleDefinition) {
  const displayName = getDisplayName(moduleName, moduleDefinition);
  if (moduleDefinition.url) {
    return `[${displayName}](${moduleDefinition.url})`;
  }
  return displayName;
}

async function generateManagers() {
  const managerIndex = require(`../deps/renovate/dist/manager`);
  const managers = managerIndex.getManagers();
  const allLanguages = {};
  for (const [manager, definition] of Object.entries(managers)) {
    const language = definition.language || 'other';
    allLanguages[language] = allLanguages[language] || [];
    allLanguages[language].push(manager);
    const { defaultConfig } = definition;
    const { fileMatch } = defaultConfig;
    const displayName = getDisplayName(manager, definition);
    let managerContent = `# Automated Dependency Updates for ${displayName}\n\n`;
    const nameWithUrl = getNameWithUrl(manager, definition);
    const disabledText =
      defaultConfig.enabled === false
        ? ', although it is disabled by default'
        : '';
    managerContent += `Renovate supports updating ${nameWithUrl} dependencies${disabledText}. `;
    if (fileMatch.length === 0) {
      managerContent += `Because file names for \`${manager}\` cannot be easily determined automatically, Renovate will not attempt to match any \`${manager}\` files by default. `;
    } else {
      managerContent += `By default, Renovate will scan files matching `;
      if (fileMatch.length === 1) {
        managerContent += `the following regular expression: \`${fileMatch[0]}\`.\n\n`;
      } else {
        managerContent += `any of the following regular expressions:\n\n`;
        managerContent += '```\n';
        managerContent += fileMatch.join('\n');
        managerContent += '\n```\n\n';
      }
    }
    const managerReadmeFile = process.env.LIVE
      ? `../renovate/lib/manager/${manager}/readme.md`
      : `deps/renovate/dist/manager/${manager}/readme.md`;

    try {
      const managerReadmeContent = await fs.readFile(managerReadmeFile, 'utf8');
      managerContent += '## Description\n\n' + managerReadmeContent + '\n\n';
    } catch (err) {
      // console.warn('Not found:' + moduleReadmeFile);
    }
    const managerFileName = `${__dirname}/../docs/modules/manager/${manager}/index.md`;
    await fs.outputFile(managerFileName, managerContent);
  }
  const languages = Object.keys(allLanguages).filter(
    language => language !== 'other'
  );
  languages.sort();
  languages.push('other');
  let languageText = '';
  function getManagerLink(manager) {
    return `[${manager}](${manager}/)`;
  }
  for (const language of languages) {
    languageText += `**${language}**: `;
    languageText += allLanguages[language].map(getManagerLink).join(', ');
    languageText += '\n\n';
  }
  const indexFileName = `${__dirname}/../docs/modules/manager.md`;
  let indexContent = await fs.readFile(indexFileName, 'utf8');
  indexContent = indexContent.replace(replaceStart, languageText);
  await fs.outputFile(indexFileName, indexContent);
}

async function generateVersioning() {
  const versionIndex = require(`../deps/renovate/dist/versioning`);
  const versioningList = versionIndex.getVersioningList();
  let versioningContent =
    'Supported values for `versioning` are: ' +
    versioningList.map(v => `\`${v}\``).join(', ') +
    '.\n\n';
  for (const versioning of versioningList) {
    const definition = require(`../deps/renovate/dist/versioning/${versioning}`);
    const {
      id,
      displayName,
      urls,
      supportsRanges,
      supportedRangeStrategies,
    } = definition;
    versioningContent += `\n### ${displayName} Versioning\n\n`;
    versioningContent += `**Identifier**: \`${id}\`\n\n`;
    if (urls.length) {
      versioningContent +=
        `**References**:\n\n` +
        urls.map(url => ` - [${url}](${url})`).join('\n') +
        '\n\n';
    }
    versioningContent += `**Ranges/Constraints:**\n\n`;
    if (supportsRanges) {
      versioningContent += `✅ Ranges are supported.\n\nValid \`rangeStrategy\` values are: ${(
        supportedRangeStrategies || []
      )
        .map(strategy => `\`${strategy}\``)
        .join(', ')}\n\n`;
    } else {
      versioningContent += `❌ No range support.\n\n`;
    }
    const versioningReadmeFile = `deps/renovate/lib/versioning/${versioning}/readme.md`;
    try {
      const versioningReadmeContent = await fs.readFile(
        versioningReadmeFile,
        'utf8'
      );
      versioningContent +=
        '**Description**:\n\n' + versioningReadmeContent + '\n';
    } catch (err) {
      console.warn('Not found:' + versioningReadmeFile);
    }
    versioningContent += `\n----\n\n`;
  }
  const indexFileName = `${__dirname}/../docs/modules/versioning.md`;
  let indexContent = await fs.readFile(indexFileName, 'utf8');
  const replaceStartIndex = indexContent.indexOf(replaceStart);
  const replaceStopIndex = indexContent.indexOf(replaceStop);
  indexContent =
    indexContent.slice(0, replaceStartIndex + replaceStart.length) +
    versioningContent +
    indexContent.slice(replaceStopIndex);
  await fs.outputFile(indexFileName, indexContent);
}

(async () => {
  await generateManagers();
  await generateVersioning();
})();
