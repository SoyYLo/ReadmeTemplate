// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "N/A") {
    return ""
  }
  return `![License](https://img.shields.io/badge/License-${license}-purple.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "N/A") {
    return ""
  }
  return `- [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "N/A") {
    return ""
  }
  return ` ## License 
  This application is under the ${license} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
 - [UserStory](#userstory)
 - [Description](#description)
 - [Usage](#usage)
 - [Link](#link)
 - [Resources](#resources)
 - [Contributors](#contributors)
   ${renderLicenseLink(data.license)}

  ## UserStory
  ${data.userStory}
  ## Description
  ${data.description}
  ## Languages
  ${data.usage}
  ## Installation
  ${data.installation}
  ## Link
  ${data.link}
  ## Resources
  ${data.resources}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  Contact Me:
  - Name: ${data.name}
  - Email: ${data.email}
  - GitHub ${data.creator}


  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
