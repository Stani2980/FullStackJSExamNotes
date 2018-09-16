class Shape {
    constructor(color) {
        this._color = color;
    }
    get area() { return undefined }
    get perimeter() { return undefined }
    get color() { return this._color }
    set color(color) { this._color = color }
    toString() { return `The Shape is the color ${this._color}` }
}

let newShape = new Shape("blue");
console.log(newShape.color)
newShape.color = "red";
console.log(newShape.color)
console.log(newShape.toString())

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }
    get radius() { return this._radius }
    set radius(radius) { this._radius = radius }
    get area() { return Math.PI * Math.pow(this._radius, 2) }
    get perimeter() { return (2 * Math.PI) * this._radius }

    toString() { return super.toString() + ` with the radius ${this._radius}` }

}

let circleShape = new Circle('Yellow', 5)
console.log("\narea is: "+circleShape.area)
console.log("perimiter is: "+circleShape.perimeter)
console.log(circleShape.toString())

class Cylinder extends Circle{
    constructor(color, radius, height){
        super(color,radius);
        this._height = height;
    }
    get height() {return this._height}
    set height(height) {this._height = height}
    get perimeter() {return undefined}
    get area() {return ((2 * Math.PI) * Math.pow(this._radius,2)) + (this._height * ((2*Math.PI)*this._radius))}
    get volume() {return (Math.PI*Math.pow(this._radius,2))*this._height}
    toString(){ return super.toString() + ` and the height of ${this._height}`
    }
}

let cylinder = new Cylinder("green", 5, 10);
console.log("\n"+cylinder.toString())
console.log("The volume of the cylinder is "+cylinder.volume)