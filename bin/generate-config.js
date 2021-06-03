const fs = require('fs-extra');
const options =
  require('../deps/renovate/dist/config/definitions').getOptions();
let {
  getCliName,
} = require('../deps/renovate/dist/workers/global/config/parse/cli');
let {
  getEnvName,
} = require('../deps/renovate/dist/workers/global/config/parse/env');
let table = require('markdown-table');
let config_options_raw;

console.log('generate-config');

process.on('unhandledRejection', (error) => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message);
  process.exit(-1);
});

async function generate_config(bot = false) {
  let config_file = `configuration-options.md`;
  if (bot) {
    config_file = `self-hosted-configuration.md`;
  }

  config_options_raw = fs
    .readFileSync(`${__dirname}/../docs/${config_file}`, 'utf8')
    .split('\n');

  options
    .filter((option) => option.status !== 'unpublished')
    .forEach((el) => {
      let header_index = config_options_raw.indexOf(`## ${el.name}`);
      if (header_index === -1) {
        header_index = config_options_raw.indexOf(`### ${el.name}`);
      }
      if (bot) {
        el.cli = getCliName(el);
        el.env = getEnvName(el);
        if (el.cli === '') {
          el.cli = `N/A`;
        }
        if (el.env === '') {
          el.env = 'N/A';
        }
      }

      config_options_raw[header_index] +=
        `\n${el.description}\n\n` +
        gen_table(Object.entries(el), el.type, el.default, bot);
    });

  fs.writeFile(
    `${__dirname}/../docs/${config_file}`,
    config_options_raw.join('\n'),
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('The configuration doc was successfuly created!');
    }
  );
}

function gen_table(obj, type, def, bot = false) {
  let data = [['Name', 'Value']];
  let name = obj[0][1];
  const ignoredKeys = [
    'name',
    'description',
    'default',
    'stage',
    'allowString',
    'cli',
    'env',
    'admin',
  ];
  // if(!bot){ ignoredKeys.push('cli', 'env') }
  obj.forEach((el) => {
    if (
      !ignoredKeys.includes(el[0]) ||
      (el[0] === 'default' && typeof el[1] !== 'object' && name !== 'prBody')
    ) {
      if (type === 'string' && el[0] === 'default') el[1] = `\`"${el[1]}"\``;
      if (type === 'boolean' && el[0] === 'default') el[1] = `\`${el[1]}\``;
      if (type === 'string' && el[0] === 'default' && el[1].length > 200)
        el[1] = `[template]`;
      data.push(el);
    }
  });

  if (type === 'list') {
    data.push(['default', '`[]`']);
  }
  if (type === 'string' && def === undefined) {
    data.push(['default', '`null`']);
  }
  if (type === 'boolean' && def === undefined) {
    data.push(['default', '`true`']);
  }
  if (type === 'boolean' && def === null) {
    data.push(['default', '`null`']);
  }
  return table(data);
}

generate_config();
generate_config(true);
