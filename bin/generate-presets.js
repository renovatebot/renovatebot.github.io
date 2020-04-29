const fs = require('fs-extra');
const presetGroups = require('../deps/renovate/dist/config/presets/internal/index.js')
  .groups;

console.log('generate-presets');

process.on('unhandledRejection', (error) => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message);
  process.exit(-1);
});

function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateFrontMatter(name, order) {
  return `---
date: 2017-12-07
title: ${name} Presets
categories:
    - config-presets
type: Document
order: ${order}
---
`;
}

async function generatePresets() {
  let index = 0;
  for (const [name, presetConfig] of Object.entries(presetGroups)) {
    index += 1;
    const filename = `${__dirname}/../docs/presets-${name}.md`;
    const formattedName = jsUcfirst(name)
      .replace('Js', 'JS')
      .replace(/s$/, '')
      .replace(/^Config$/, 'Full Config');
    const frontMatter = generateFrontMatter(formattedName, index);
    let content = `\n`;
    for (const [preset, value] of Object.entries(presetConfig)) {
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
