// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const md = require('./utils/generateMarkdown.js');
const fs = require('fs');


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([{
                type: 'input',
                name: 'title',
                message: "Project title: "
            },
            {
                type: 'input',
                name: 'description',
                message: "Project description: "
            },
            {
                type: 'input',
                name: 'installInstruction',
                message: "Installation instructions: "
            },
            {
                type: 'input',
                name: 'usage',
                message: "Project usage: "
            },
            {
                type: 'list',
                name: 'license',
                message: "Project license: ",
                choices: [{
                    key: 'no-badge',
                    name: 'No badge',
                    value: 'no-badge'
                }, {
                    key: 'apa',
                    name: 'Apache license 2.0',
                    value: 'apache-2.0'
                }, {
                    key: 'boost',
                    name: 'Boost Software License 1.0',
                    value: 'boost-1.0'
                }, {
                    key: 'bsd3',
                    name: 'BSD 3-Clause License',
                    value: 'bsd-3-clause'
                }, {
                    key: 'bsd2',
                    name: 'BSD 2-Clause License',
                    value: 'bsd-2-clause'
                }, {
                    key: 'cc0',
                    name: 'Creative Commons 0',
                    value: 'cc-0-1.0'
                }, {
                    key: 'ccby4',
                    name: 'Attribution 4.0 International',
                    value: 'cc-by-4.0'
                }, {
                    key: 'cc-by-sa',
                    name: 'Attribution-ShareAlike 4.0 International',
                    value: 'cc-by-sa-4.0'
                }]
            },
            {
                type: 'input',
                name: 'contributing',
                message: "How to contribute: "
            },
            {
                type: 'input',
                name: 'tests',
                message: "Tests: "
            },
            {
                type: 'input',
                name: 'questions',
                message: "Questions: "
            },
        ])

    .then((answers) => {
            fs.writeFile('../README2.md', md.generateMarkdown(JSON.stringify(answers)), (err) =>
                err ? console.log(err) : console.log(`Successfully Created`)
            );

        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// function writeFile(fileName, content) {
//     fs.writeFile('README.md', md.generateMarkdown(JSON.stringify(answers)), (err) =>
//         err ? console.log(err) : console.log(`Successfully Created ${fileName}`)
//     );
// }

// writeFile("index.html", htmlPageContent);
// writeFile("style.css", cssContent);

// Function call to initialize app
init();