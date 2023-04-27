//this shape will be used for circle, square, and triangle

class Shape {
    constructor (shapeColor) {
        this.shapeColor = shapeColor;
    }
    setColor (shapeColor) {
        this.shapeColor = shapeColor;
    }
};

class Circle extends Shape {
    render () {
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.shapeColor}" />`
    }
  }

class Triangle extends Shape {
    render () {
        return `<polygon points="50,10 100,100 0,100" stroke="black" stroke-width="3" fill="${this.shapeColor}" />`
    }
}

class Square extends Shape {
    render () {
        return `<rect width="80" height="80" stroke="black" stroke-width="3" fill="${this.shapeColor}" />`
    }
}

module.exports = {Shape, Circle, Triangle, Square};