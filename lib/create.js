const prompt = require('prompt');
const shell = require('shelljs');
const fs = require('fs');
const colors = require('colors/safe');

module.exports = (args, options, logger) => {
    console.log({
        args: args,
        options: options
    });
};