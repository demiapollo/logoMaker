//Define shapes extending from Shape class

//circle
class Circle extends Shape {
  constructor(shapeColor, text, textColor, radius) {
    super(shapeColor, text, textColor);
    this.radius = radius;
  }
}

//triangle

//square

//function to create a shape based on user input
function setShape(response) {
  if (response.shape === "circle") {
    return circle(response);
  }

  if (response.shape === "triangle") {
    return triangle(response);
  }

  if (response.shape === "square") {
    return square(response);
  }
}

module.exports = setShape;
