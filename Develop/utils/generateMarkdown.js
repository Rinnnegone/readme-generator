// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributions](#contributions)
-[Tests](#tests)
-[Questions](#questions)

## Descriptions
${data.descriptions}
## Installations
${data.installations}
## Usage
${data.usage}
## License 
![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Contributions 
${data.contributions}
## Tests
${data.tests}
## Questions
-GitHub: [${data.github}(https://github.com/${data.github})]
-Email: [${data.email}](mailto:example@example.com)
`;
}

module.exports = generateMarkdown;
