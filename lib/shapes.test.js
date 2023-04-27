const { Circle, Triangle, Square } = require("./shapes");
describe("Circle", () => {
  test("sets the color blue", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="50,10 100,100 0,100" stroke="black" stroke-width="3" fill="blue" />'
    );
  });
});
