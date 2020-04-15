/*jshint esversion: 6 */

// Require statements
const fs = require('fs');

// Variables
var file_name = 'file1.txt';
// Write to file
fs.writeFileSync(file_name,'This file ' + file_name + ' is created by writeFileSync function');
fs.appendFileSync(file_name, '\n');
fs.appendFileSync(file_name, 'This data is appended to the file by using appendFileSync function');