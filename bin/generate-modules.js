const fs = require('fs-extra');

console.log('generate-modules');

process.on('unhandledRejection', (error) => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message);
  process.exit(-1);
});

const replaceStart =
  '<!-- Autogenerate in https://github.com/renovatebot/renovatebot.github.io -->';
const replaceStop = '<!-- Autogenerate end -->';

function capitalize(input) {
  // console.log(input);
  return input[0].toUpperCase() + input.slice(1);
}

function formatName(input) {
  return input.split('-').map(capitalize).join(' ');
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
  for (const [manager, definition] of managers) {
    const language = definition.language || 'other';
    allLanguages[language] = allLanguages[language] || [];
    allLanguages[language].push(manager);
    const { defaultConfig } = definition;
    const { fileMatch } = defaultConfig;
    const displayName = getDisplayName(manager, definition);
    let md = '';
    if (manager === 'regex') {
      md += `# Custom Manager Support using Regex\n\n`;
    } else {
      md += `# Automated Dependency Updates for ${displayName}\n\n`;
      const nameWithUrl = getNameWithUrl(manager, definition);
      md += `Renovate supports updating ${nameWithUrl} dependencies.\n\n`;
      if (defaultConfig.enabled === false) {
        md += '## Enabling\n\n';
        md += `${displayName} functionality is currently in beta testing so you must opt in to test it out. To enable it, add a configuration like this to either your bot config or your \`renovate.json\`:\n\n`;
        md += '```\n';
        md += `{\n  "${manager}": {\n    "enabled": true\n  }\n}`;
        md += '\n```\n\n';
        md +=
          'If you encounter any bugs, please [raise a bug report](https://github.com/renovatebot/renovate/issues/new?template=3-Bug_report.md). If you find that it works well, then feedback on that would be welcome too.\n\n';
      }
      md += '## File Matching\n\n';
      if (fileMatch.length === 0) {
        md += `Because file names for \`${manager}\` cannot be easily determined automatically, Renovate will not attempt to match any \`${manager}\` files by default. `;
      } else {
        md += `By default, Renovate will check any files matching `;
        if (fileMatch.length === 1) {
          md += `the following regular expression: \`${fileMatch[0]}\`.\n\n`;
        } else {
          md += `any of the following regular expressions:\n\n`;
          md += '```\n';
          md += fileMatch.join('\n');
          md += '\n```\n\n';
        }
      }
      md += `For details on how to extend a manager's \`fileMatch\` value, please follow [this link](/modules/manager/#file-matching).\n\n`;
    }

    const managerReadmeFile = process.env.LIVE
      ? `../renovate/lib/manager/${manager}/readme.md`
      : `deps/renovate/lib/manager/${manager}/readme.md`;

    try {
      const managerReadmeContent = await fs.readFile(managerReadmeFile, 'utf8');
      if (manager !== 'regex') {
        md += '\n## Additional Information\n\n';
      }
      md += managerReadmeContent + '\n\n';
    } catch (err) {
      // console.warn('Not found:' + moduleReadmeFile);
    }
    const managerFileName = `${__dirname}/../docs/modules/manager/${manager}/index.md`;
    await fs.outputFile(managerFileName, md);
  }
  const languages = Object.keys(allLanguages).filter(
    (language) => language !== 'other'
  );
  languages.sort();
  languages.push('other');
  let languageText = '\n';
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
  const replaceStartIndex = indexContent.indexOf(replaceStart);
  const replaceStopIndex = indexContent.indexOf(replaceStop);
  indexContent =
    indexContent.slice(0, replaceStartIndex + replaceStart.length) +
    languageText +
    indexContent.slice(replaceStopIndex);
  await fs.outputFile(indexFileName, indexContent);
}

async function generateVersioning() {
  const versionIndex = require(`../deps/renovate/dist/versioning`);
  const versioningList = versionIndex.getVersioningList();
  let versioningContent =
    '\nSupported values for `versioning` are: ' +
    versioningList.map((v) => `\`${v}\``).join(', ') +
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
        urls.map((url) => ` - [${url}](${url})`).join('\n') +
        '\n\n';
    }
    versioningContent += `**Ranges/Constraints:**\n\n`;
    if (supportsRanges) {
      versioningContent += `✅ Ranges are supported.\n\nValid \`rangeStrategy\` values are: ${(
        supportedRangeStrategies || []
      )
        .map((strategy) => `\`${strategy}\``)
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

async function generateDatasources() {
  const dsIndex = require(`../deps/renovate/dist/datasource`);
  const dsList = dsIndex.getDatasources();
  let datasourceContent =
    '\nSupported values for `datasource` are: ' +
    dsList.map((v) => `\`${v}\``).join(', ') +
    '.\n\n';
  for (const [datasource, definition] of dsList) {
    const {
      urls,
      defaultConfig
    } = definition;
    const displayName = getDisplayName(datasource, definition);
    datasourceContent += `\n### ${displayName} Datasource\n\n`;
    datasourceContent += `**Identifier**: \`${id}\`\n\n`;
    if (urls && urls.length) {
      datasourceContent +=
        `**References**:\n\n` +
        urls.map((url) => ` - [${url}](${url})`).join('\n') +
        '\n\n';
    }

    const datasourceReadmeFile = `deps/renovate/lib/datasource/${datasource}/readme.md`;
    try {
      const datasourceReadmeContent = await fs.readFile(
        datasourceReadmeFile,
        'utf8'
      );
      datasourceContent +=
        '**Description**:\n\n' + datasourceReadmeContent + '\n';
    } catch (err) {
      console.warn('Not found:' + datasourceReadmeFile);
    }

    if(defaultConfig){
      datasourceContent +=
        '**Default configuration**:\n\n```json\n' + JSON.stringify(defaultConfig, undefined, 2) + '\n```\n';
    }

    datasourceContent += `\n----\n\n`;
  }
  const indexFileName = `${__dirname}/../docs/modules/datasource.md`;
  let indexContent = await fs.readFile(indexFileName, 'utf8');
  const replaceStartIndex = indexContent.indexOf(replaceStart);
  const replaceStopIndex = indexContent.indexOf(replaceStop);
  indexContent =
    indexContent.slice(0, replaceStartIndex + replaceStart.length) +
    datasourceContent +
    indexContent.slice(replaceStopIndex);
  await fs.outputFile(indexFileName, indexContent);
}

(async () => {
  await generateManagers();
  await generateVersioning();
  await generateDatasources();
})();
