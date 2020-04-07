const fs = require('fs-extra');

console.log('generate-presets');

process.on('unhandledRejection', (error) => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message);
  process.exit(-1);
});

function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateFrontMatter(name, description, order) {
  return `---
date: 2017-12-07
title: ${name} Presets
categories:
    - config-presets
description: ${description}
type: Document
order: ${order}
---
`;
}

async function generatePresets() {
  const dirs = await fs.readdir('deps/renovate-config/packages');
  for (const [index, dir] of dirs.entries()) {
    const pj = JSON.parse(
      await fs.readFile(`deps/renovate-config/packages/${dir}/package.json`)
    );
    const filename = `${__dirname}/../docs/presets-${dir.substring(
      'renovate-config-'.length
    )}.md`;
    const name = pj.name.substring('renovate-config-'.length);
    const formattedName = jsUcfirst(name)
      .replace('Js', 'JS')
      .replace(/s$/, '')
      .replace(/^Config$/, 'Full Config');
    const description = pj.description;
    const frontMatter = generateFrontMatter(formattedName, description, index);
    let content = `\n${description}. [Source repository](https://github.com/renovatebot/renovate-config/tree/master/packages/${pj.name})\n`;
    for (const [preset, value] of Object.entries(pj['renovate-config'])) {
      let header = `\n### ${name === 'default' ? '' : name}:${preset}`;
      let presetDescription = value.description;
      delete value.description;
      if (!presetDescription) {
        if (value.packageRules && value.packageRules[0].description) {
          presetDescription = value.packageRules[0].description;
          delete value.packageRules[0].description;
        }
      }
      let body = '';
      if (presetDescription) {
        body += `\n\n${presetDescription}\n`;
      } else {
        console.warn(`Preset ${name}:${preset} has no description`);
      }
      body += '\n```\n';
      body += JSON.stringify(value, null, 2);
      body += '\n```\n';
      body += '----\n';
      if (body.includes('{{arg0}}')) {
        header += '(`<arg0>`';
        if (body.includes('{{arg1}}')) {
          header += ', `<arg1>`';
          if (body.includes('{{arg2}}')) {
            header += ', `<arg2>`';
          }
        }
        header += ')';
        body = body.replace(/{{(arg\d+)}}/g, '$1');
      }
      content += header + body;
    }
    await fs.writeFile(filename, frontMatter + content);
  }
}

generatePresets();
