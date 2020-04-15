/*jshint esversion: 6 */

console.log("utils-export-function.js file called...");

const getNote = (note) => {
	return 'Remember - ' + note;
};

// Export the const member function
module.exports = getNote;