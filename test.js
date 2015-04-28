'use strict'

/*!
 * imports.
 */

var format = require('util').format
var fs = require('fs')
var mkdirp = require('mkdirp').sync
var path = require('path')
var rimraf = require('rimraf').sync
var Sprout = require('sprout')
var test = require('tape-catch')
var tmpdir = require('osenv').tmpdir()

/*!
 * constants.
 */

var TEMPLATE_NAME = 'commonjs-lib'
var BASE_OUT_PATH = path.resolve(tmpdir, TEMPLATE_NAME)
console.error(BASE_OUT_PATH)

/*!
 * paths.
 */

var projectCreationDir = path.resolve(BASE_OUT_PATH, 'out')
var templateInstallDir = path.resolve(BASE_OUT_PATH, 'config')
var templateLocalsPath = path.resolve(__dirname, 'locals.json')
var templateSourceRoot = path.resolve(__dirname)

/*!
 * imports (local).
 */

var locals = require(templateLocalsPath)

/*!
 * options.
 */

var options = {
  config: templateLocalsPath
}

/*!
 * parameters.
 */

var parameters = [
  { file: 'changelog.md', pattern: /[\d]{4}-[\d]{2}-[\d]{2}/ },
  { file: 'index.js', pattern: locals.package_description },
  { file: 'package.json', pattern: format('"name": "%s"', locals.package_name) },
  { file: 'readme.md', pattern: /tiny\('training'\)/ },
  { file: 'license', pattern: locals.github_user_email },
  { file: 'contributing.md', pattern: 'Contributing to tiny' },
  { file: 'test.js', pattern: format('%s()', locals.package_name) },
  { file: '.travis.yml', pattern: 'language: node_js' }
]

/*!
 * parameterized tests.
 */

function parameterizedTests (t) {
  parameters.forEach(function (p) {
    var file = path.resolve(projectCreationDir, p.file)
    t.assert(fs.readFileSync(file, 'utf8').match(p.pattern), p.file)
  })
}

/*!
 * init.
 */

function init (t, sprout) {
  sprout
  .init(TEMPLATE_NAME, projectCreationDir, options)
  .then(parameterizedTests.bind(null, t))
}

/*!
 * tests.
 */

test(TEMPLATE_NAME + 'content', function (t) {
  t.plan(parameters.length)

  rimraf(projectCreationDir)
  mkdirp(templateInstallDir)
  var sprout = new Sprout(templateInstallDir)

  sprout
  .add(TEMPLATE_NAME, templateSourceRoot)
  .then(init.bind(null, t, sprout))
  .done()
})
