/*jshint esversion: 6 */

// Require statements
const fs = require('fs');

// Variables
var file_name = 'file1.txt';

// Write to file
fs.writeFileSync(file_name, 'This file ' + file_name + ' is created by writeFileSync function at ' + new Date());

// Append data to file
fs.appendFileSync(file_name, '\nThis data is appended to the file by using appendFileSync function at ' + new Date());

// Read data from file as a String in synchronous manner
console.log(fs.readFileSync("./" + file_name, 'utf8', String));

// Read data from file as a String in asynchronous manner
fs.readFile("./" + file_name, 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});