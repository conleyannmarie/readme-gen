const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'name',
    message: "what is your project name?"
},{
    type: 'input',
    name: 'project',
    message: "what does your project do?"
},{
    type: 'input',
    name: 'project2',
    message: "What was the motivation behind this project?"
},{
    type: 'input',
    name: 'utilities',
    message: "What ?"
},{
    type: 'input',
    name: 'github',
    message: "what is your github username?"
},{
    type: 'list',
    name: 'license',
    message: "what is your license?",
    choices: ["MIT","APACHE 2.0", 'GPL 3.0', 'BSD 3']
}];
// Name of project
//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//what the project does
// Motivation behind project/Why this project exists
// What isit built with
//step by step how to
//if api applicable goes here
//screenshots
//contributing guideline
//license


inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    fs.writeFileSync(path.join(__dirname,'/output/README.md'),generateMarkDown(answers),'utf8');
});
