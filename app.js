/*jshint esversion: 6 */

const validator = require('validator');
const chalk = require('chalk');
const name = require('./utils-export-variable.js');
const getNote = require('./utils-export-function');

console.log(name);
console.log(getNote('Bring Potato!!'));

// Using validator api
console.log(validator.isEmail('boob.sachin@gmail.com'));
console.log(validator.isEmail('asdf@df.'));
console.log(validator.isURL('https://google.com'));

// Below code throws error
// console.log(validator.isEmail(5));

// Using chalk api
console.log(chalk.green('Success!'));
console.log(chalk.red('Failure!'));
console.log(chalk.redBright('Failure!'));
console.log(chalk.yellow('Yellow!!'));
console.log(chalk.magenta('Magenta!!'));
console.log(chalk.magentaBright('Magenta Bright!!'));