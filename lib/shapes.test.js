const SVG = require("./svg");
const { Circle, Triangle, Square, Shape } = require("./shapes");

//test for circle
describe("Circle", () => {
  test("sets the color blue", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="blue" />'
    );
  });
});

//test for square
describe("Square", () => {
  test("sets the color blue", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect width="80" height="80" stroke="black" stroke-width="3" fill="blue" />'
    );
  });
});

//test for triangle
describe("Triangle", () => {
  test("sets the color blue", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="50,10 100,100 0,100" stroke="black" stroke-width="3" fill="blue" />'
    );
  });
});

//test for svg
describe("SVG", () => {
  test("a test for SVG", () => {
    const svg = new SVG();
    svg.setText("svg", "red");
    expect(svg.render()).toEqual(
      `<svg height="100" width="100"><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="red">svg</text></svg>`
    );
  });
});
