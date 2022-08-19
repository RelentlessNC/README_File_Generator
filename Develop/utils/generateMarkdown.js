// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'no-badge':
            return '';
        case 'apache-2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'boost-1.0':
            return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        case 'bsd-3-clause':
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        case 'bsd-2-clause':
            return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
        case 'cc-0-1.0':
            return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
        case 'cc-by-4.0':
            return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)';
        case 'cc-by-sa-4.0':
            return '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)';
        default:
            break;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'no-badge':
            return '';
        case 'apache-2.0':
            return '[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)';
        case 'boost-1.0':
            return '[https://www.boost.org/LICENSE_1_0.txt](https://www.boost.org/LICENSE_1_0.txt)';
        case 'bsd-3-clause':
            return '[https://opensource.org/licenses/BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
        case 'bsd-2-clause':
            return '[https://opensource.org/licenses/BSD-2-Clause](https://opensource.org/licenses/BSD-2-Clause)';
        case 'cc-0-1.0':
            return '[http://creativecommons.org/publicdomain/zero/1.0/](http://creativecommons.org/publicdomain/zero/1.0/)';
        case 'cc-by-4.0':
            return '[https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/)';
        case 'cc-by-sa-4.0':
            return '[https://creativecommons.org/licenses/by-sa/4.0/)](https://creativecommons.org/licenses/by-sa/4.0/)';
        default:
            break;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const { title, description, installInstruction, usage, license, contributing, tests, questions } = JSON.parse(data);
    return `# ${title}

    ${renderLicenseBadge(license)}
    ## Table of Contents
    
    1.  [Description](#description)
        1.  [Installation](#installation)
        2   [Usage](usage)
        3.  [Contributing](contributing)
        4.  [Tests](tests)
        5.  [Questions](questions)

    ### Description
    
    <a name="description"></a>
    ${description}

    ### Installation

    <a name="installation"></a>
    ${installInstruction}

    ### Usage

    <a name="usage"></a>
    ${usage}

    ### Contributing

    <a name="contributing"></a>
    ${contributing}

    ### Tests

    <a name="tests"></a>
    ${tests}

    ### Questions

    <a name="questions"></a>
    ${questions}
    `;
}

module.exports = { generateMarkdown };