/*jshint esversion: 6 */

const class1 = {
	name: 'Sachin Boob',
	age: 30,
	dob: new Date(),
	print: () => {
		console.log(class1.name, ',', class1.age, ',', class1.dob);
	}
};

module.exports = class1;