'use strict'

/*!
 * imports.
 */

var fs = require('fs')
var path = require('path')
var rimraf = require('rimraf')
var Sprout = require('sprout')
var sprout = new Sprout(path.resolve(__dirname, 'test', 'config'))
var test = require('tape-catch')
var format = require('util').format

/*!
 * imports (local).
 */

var locals_path = path.resolve(__dirname, 'locals.json')
var locals = require(locals_path)
var template_path = path.resolve(__dirname)
var test_project_path = path.resolve(__dirname, 'test', 'out')

/*!
 * options.
 */

var options = {
  config: locals_path
}

/*!
 * parameters.
 */

var parameters = [
  { file: 'changelog.md', pattern: /[\d]{4}-[\d]{2}-[\d]{2}/ },
  { file: 'index.js', pattern: locals.package_description },
  { file: 'package.json', pattern: format('"name": "%s"', locals.package_name) }
]

/*!
 * tests.
 */

test('sprout-commonjs-lib', function (t) {
  t.plan(parameters.length)

  sprout
    .add('commonjs-lib', template_path)
    .then(function () {
      rimraf.sync(test_project_path)
    })
    .then(function () {
      sprout.init('commonjs-lib', test_project_path, options).then(function () {
        parameters.forEach(function (p) {
          var file = path.resolve(test_project_path, p.file)
          t.assert(fs.readFileSync(file, 'utf8').match(p.pattern), p.file)
        })
      })
    })
    .done(function () {
    })
})
