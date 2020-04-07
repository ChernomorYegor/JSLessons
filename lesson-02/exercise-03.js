// Exercise 03:
//Create an object called shape that has the type property and a getType() method.

//Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle() should have three own properties—a, b, and c, representing the lengths of the sides of a triangle.

//Add a new method to the prototype called getPerimeter()

// const shape = {
// 	type: 'triangle',
// 	getType: function () {
// 		return this.type;
// 	},
// 	// __proto__: new Triangle
// };

function Triangle(a, b, c) {
	this.type = 'triangle';
	this.a = a;
	this.b = b;
	this.c = c;
	this.getPerimeter = function() {
    	return this.a + this.b + this.c;
	};
	this.getType = function () {
		return this.type;
	}
}

let shape = new Triangle();

Triangle.prototype = shape;

// Triangle.prototype.getPerimeter = function() {
//     return this.a + this.b + this.c;
// };