// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  switch (license) {
    case "GNU_AGPLv3": link = "https://choosealicense.com/licenses/agpl-3.0/"
      break;
    case "GNU_GPLv3": link = "https://choosealicense.com/licenses/gpl-3.0/"
      break;
    case "GNU LGPLv3": link = "https://choosealicense.com/licenses/lgpl-3.0/"
      break;
    case "Mozilla": link = "https://choosealicense.com/licenses/mpl-2.0/"
      break;
    case "Apache": link = "https://choosealicense.com/licenses/apache-2.0/"
      break;
    case "MIT": link = "https://choosealicense.com/licenses/mit/"
      break;
    case "Boost": link = "https://choosealicense.com/licenses/bsl-1.0/"
      break;
    case "Unilicense": link = "https://choosealicense.com/licenses/unlicense/"
      break;
    default: link = "no licencse";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
function renderLicenseBadge(license) {
  if (licence === 'MIT') {
    return " ";
  } else {
    return `[![${license}](https://img.shields.io/badge/license-${license}-blue)](${renderLicenseLink(license)})`
  }
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    // console.log(data.title);
    // pesky back tick placement
  return `${renderLicenseBadge(data.licence)}

# ${data.title};

# Table of Contents
-[Description](#Description)
-[Installation](#Installation)
-[Usage](#Usage)
-[Contributors](#Contributors)
-[License](#License)
-[Username](#Github)
-[Email](#Email)

# Description
${data.description}

# Installation
${data.installation}

# Usage
${data.usage}

# License
${data.licence}

# Contributors
${data.contributors}

# Username
${data.github}

# Email
${data.email}
`;
  }
}
module.exports = generateMarkdown;
// using link instead of badge, clean it up