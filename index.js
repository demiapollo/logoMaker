const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions");
const fileName = "./examples/logo.svg";
const setShape = require("./lib/setShape");

// function to create a new svg
function createSvg(response) {
  const svg = setShape(response);
  fs.writeFile(fileName, svg, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// function to initialize
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      createSvg(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
