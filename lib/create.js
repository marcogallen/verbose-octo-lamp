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

//Online Career Center México, S.A.P.I. de C.V. 
//Autopista México Querétaro #3130, piso 7, 700-C, Colonia Valle Dorado, en Tlalnepantla, Estado de México, Código Postal 54020
//01800 600 6000