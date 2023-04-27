const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions");
const fileName = "./examples/logo.svg";

const SVG = require("./lib/svg");
const { Circle, Triangle, Square } = require("./lib/shapes"); 

inquirer.prompt(questions).then((response) => {
    let shape;
    if (response.shape === "circle") {
        shape = new Circle();
    } 
    if (response.shape === "triangle") {
        shape = new Triangle();
    }
    if (response.shape === "square") {
        shape = new Square();
    }
    shape.setColor(response.shapeColor);

    const svg = new SVG();
    svg.setText(response.text, response.textColor);
    svg.setShape(shape);

    fs.writeFile(fileName, svg.render(), (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Success!");
    });

});