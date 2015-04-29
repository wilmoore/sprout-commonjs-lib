'use strict'

/*!
 * imports.
 */

var exec = require('child_process').execSync

/*!
 * exports.
 */

exports.exportName = exportName
exports.gitConfigGet = gitConfigGet
exports.repoName = repoName
exports.simpleName = simpleName

/**
 * Default module export name (camelCased package name).
 *
 * @param {String} name
 *
 * @return {String}
 * camelCased package name
 */

function exportName (name) {
  return camel(simpleName(name))
}

/**
 * Package name with file extension removed.
 *
 * @param {String} name
 *
 * @return {String}
 * CamelCased Package name with file extension removed.
 */

function simpleName (name) {
  return name.split(/^node-/).pop().split('.').shift()
}

/**
 * Normalize repo name
 *
 * @param {String} name
 * repository name.
 *
 * @return {String}
 * normalized repository name.
 */

function repoName (name) {
  // in case user inputs user/repo, we just take `repo` part.
  return name.split('/').pop()
}

/**
 * Get git config for given key.
 *
 * @param {String} key
 *
 * @return {String}
 * Git configuration value.
 */

function gitConfigGet (key) {
  return String(exec('git config --get ' + key) || '').trim()
}

/**
 * CamelCase name.
 *
 * @param {String} name
 *
 * @return {String}
 * CamelCased name.
 */

function camel (name) {
  return name
    .split(/[-_]/)
    .map(uppercaseTail)
    .join('')
}

/**
 * UpperCase strings where `idx` > 0.
 *
 * @param {String} str
 * @param {String} idx
 *
 * @return {String}
 * Uppercase or un-modified string.
 */

function uppercaseTail (str, idx) {
  return idx === 0
    ? str
    : str.replace(/^./, str[0].toUpperCase())
}
