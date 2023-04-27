const questions = [
  //text
  {
    name: text,
    message: "What text would you like to use?",
    type: "input",
    validate: (answer) => {
      if (answer.length > 3) {
        return "Text must be three characters or less.";
      }
      return true;
    },
  },

  //text color
  {
    name: textColor,
    message: "What color would you like the text to be?",
    type: "list",
    choices: ["red", "blue", "green", "yellow", "black", "white", "orange"],
  },

  //shape
  {
    name: shape,
    message: "What shape would you like to use?",
    type: "list",
    choices: ["circle", "triangle", "square"],
  },
  //shape color
  {
    name: shapeColor,
    message: "What color would you like the shape to be?",
    type: "list",
    choices: ["red", "blue", "green", "yellow", "black", "white", "orange"],
  },
];

module.exports = questions;
