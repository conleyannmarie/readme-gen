//node modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileSync = util.promisify(fs.writeFile)

// inquirer to generate questions
const promptUser = () => {
  return inquirer.prompt([
  //name of project
  {
    type: "input",
    name: "Name",
    message: "what is your project name?",
    //validate property
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    name: "Installation",
    message: "How do you install your app?",
    
  },
  {
    type: "input",
    name: "Description",
    message: "what does your project do?",
    //validate property
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    name: "Projectmotivation",
    message: "What was the motivation behind this project?",
  },
  {
    type: "input",
    name: "Builtwith",
    message: "What is your project built with?",
    //validate property
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    name: "Contributing",
    message: "What are your contributing Guidelines?",
    //validate property
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    name: "StepbyStep",
    message: "What are the step by step to use your project?",
    //validate property
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    name: "API",
    message: "Enter API you used if applicable",
  },
  {
    //list of license
    type: "list",
    name: "license",
    message: "what is your license?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "N/A"],
    //validate property
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
]);
}

//if api applicable goes here
//screenshots
//able of Contents, Installation, Usage, License, Contributing, Tests,
// Function to intialize the app

const init = () => {
  promptUser()
    .then((answers) => writeFileSync('./output/README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init()
