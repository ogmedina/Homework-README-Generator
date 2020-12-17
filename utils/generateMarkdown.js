// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  ![GitHub](https://img.shields.io/github/license/${data.githubuser}/${data.project})

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:

  ${data.installdep}

  ## Usage 
  ${data.usingrepo}

  ## License
  This project is licensed under the ${data.license} License.

  ## Contributing
  ${data.contrepo}

  ## Tests
  To run tests, run the following command:

  ${data.testdep}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You 
  can find more of my work at my [GitHub Account](https://github.com/${data.githubuser}/)
  

`};
//export function generateMarkdown
module.exports = generateMarkdown;
