import fs from 'fs-extra';
import { allowedFields, exposedConfigOptions } from '../deps/renovate/dist/util/template/index.js';

console.log('generate-templates');

process.on('unhandledRejection', (error) => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error);
  process.exit(-1);
});

async function generateTemplates() {
  let exposedConfigOptionsText =
    'The following configuration options are passed through for templating: ';
  exposedConfigOptionsText +=
    exposedConfigOptions
      .map(
        (field) => `[${field}](/configuration-options/#${field.toLowerCase()})`
      )
      .join(', ') + '.';

  let runtimeText =
    'The following runtime values are passed through for templating: \n\n';
  for (const [field, description] of Object.entries(allowedFields)) {
    runtimeText += ` - \`${field}\`: ${description}\n`;
  }
  runtimeText += '\n\n';

  const templateFile = 'docs/templates.md';
  let templateContent = await fs.readFile(templateFile, 'utf8');
  const header1 = '## Exposed config options';
  templateContent = templateContent.replace(
    header1,
    `${header1}\n\n${exposedConfigOptionsText}`
  );
  const header2 = '## Other available fields';
  templateContent = templateContent.replace(
    header2,
    `${header2}\n\n${runtimeText}`
  );
  await fs.outputFile(templateFile, templateContent);
}

generateTemplates();
