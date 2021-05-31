const prompt = require('prompt');
const shell = require('shelljs');
const fs = require('fs');
const colors = require('colors/safe');

prompt.message = colors.green("Replace;")

module.exports = (args, options, logger) => {
    const variant = options.variant || 'default';
    const templatePath = `${__dirname}/../templates/${args.template}/${variant}`;
    const localPath = process.cwd();

    console.log(`templatePath: ${templatePath} variant ${variant}`);
};