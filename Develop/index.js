// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("utils"); // is this required if I am also using the line below?
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// questions are going to be objects
// function writeToFile(fileName, data) {}
// async function promptUser() {
// function promptUser() {
//     return inquirer.prompt([
// function writeToFile(fileName, data) {}
const questions =
    ([
        {
            type: "input",
            name: "title",
            message: "What is the title of your ReadMe?",
        },
        {
            type: "input",
            name: "describe",
            message: "Describe your project?",
        },
        {
            type: "input",
            name: "instuction",
            message: "What are the installation instructions for your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the intended usage for your project?",
        },
        {
            type: "input",
            name: "contribution",
            message: "What are the contribution guidelines for your project?",
        },
        {
            type: "list",
            name: "license",
            message: "Select a license from the list",
            choices: ["MIT", "Mozilla", "Apache", "GNU APLv3", "GNU GPLv3", "GNU LGPLv3", "Boost", "Unilicense"],
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("success!")
    );
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    inquirer.prompt(questions)
        .then(function (answers) {
            const text = generateMarkdown.generateMarkdown(answers)
            writeToFile("README.md", text)
        })
}
// Function call to initialize app
init();
