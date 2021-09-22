const generateMarkdown = data => {
  let licenseLink = '';
  
  switch(data.license) {
    case 'MIT': licenseLink = 'https://opensource.org/licenses/MIT';
    break;

    case 'APACHE 2.0': licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
    break;

    case 'GPL 3.0': licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    break;

    case 'BSD3': licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
    break;

    default: licenseLink = 'This app has no license.'
  }

//The beginning of the markdown document creation
  //The beginning of the markdown document creation
  return `
[![Generic badge](https://img.shields.io/badge/license-${data.license}-<COLOR>.svg)](#license)
# ${data.name}

## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Motivation](#motivation)
* [Built With](#Built With)
* [Contributing](#contributing)
* [Step by Step](#Step by Step)
* [License](#license)
* [Questions](#questions)

##Installation
${data.installation}

##Motivation
${data.motivation}

##Built With
${data.builtwith}

##Contributing
${data.contributing}

##Step by Step
${data.stepbystep}

##License
### This app is licensed under the [${data.license}](${licenseLink}) license.

##Questions
* GitHub: [${data.github}](https://github.com/${data.github})
* Email: 
[${data.email}](mailto:${data.email})
  `
}

module.exports = generateMarkdown;



