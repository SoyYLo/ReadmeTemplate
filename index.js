// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your first name?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Name your README.',
    },
    {
        type: 'input',
        name: 'userStory',
        message: 'Please provide an exceptional User Story for your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a detailed description about your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license used for this project.',
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "N/A"],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation process for this project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please list all languages or technologies used for this project.',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please copy and paste your project deployed link here:',
    },
    {
        type: 'input',
        name: 'resources',
        message: 'Please copy and paste links to any resources or documentation used to complete this project.',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List any or all contributors associated with this project. Input n/a if none:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide a walkthrough of any required tests or input N/A',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("Creating Professional README.md file...");
        writeToFile("./complete/README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();
