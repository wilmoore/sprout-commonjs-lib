'use strict'

/*!
 * imports.
 */

var format = require('util').format
var exportName = require('./utils').exportName
var gitConfigGet = require('./utils').gitConfigGet
var repoName = require('./utils').repoName
var simpleName = require('./utils').simpleName

/*!
 * exports.
 */

exports.beforeRender = function (utils, config) {
  config.date = (new Date().toISOString()).split('T')[0]
  config.repo_name = repoName(config.repo_name)
  config.github_clone_url = format('https://github.com/%s/%s.git', config.github_user_name, config.repo_name)
  config.simple_name = simpleName(config.repo_name)
  config.export_name = exportName(config.repo_name)
  config.author_full_name = gitConfigGet('user.name')
}

exports.after = function (utils, config) {
  if (!config.travis) utils.remove('.travis.yml')
  console.log('\nYour CommonJS package has been generated. To get started, type: \n\n    cd %s && npm install && npm run dev\n', config.repo_name)
}

/*!
 * config.
 */

exports.configure = [
  {
    type: 'input',
    name: 'github_user_name',
    message: 'What is your GitHub username?',
    default: gitConfigGet('github.user')
  },

  {
    type: 'input',
    name: 'github_user_email',
    message: 'What is your GitHub email address?',
    default: gitConfigGet('user.email')
  },

  {
    type: 'input',
    name: 'package_name',
    message: 'What do you want to name your package?'
  },

  {
    type: 'input',
    name: 'repo_name',
    message: 'Please provide a GitHub repo name for your package?'
  },

  {
    type: 'input',
    name: 'package_description',
    message: 'A brief description of your project'
  },

  {
    type: 'confirm',
    name: 'travis',
    message: 'Do you want to use Travis CI?',
    default: true
  }
]
