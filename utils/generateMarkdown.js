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
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  [userStory](#User Story)
  [description](#description)
  [license](#License)
  [usage](#Usage)
  [link](#Link)
  [resources](#Resources)
  [contributors](#Contributors)
  ${renderLicenseLink(data.license)}
  ## User Story
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
