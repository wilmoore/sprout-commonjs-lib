'use strict'

/*!
 * imports.
 */

var fs = require('fs')
var path = require('path')
var rimraf = require('rimraf')
var Sprout = require('sprout')
var sprout = new Sprout(path.resolve(__dirname, 'config'))
var test = require('tape-catch')

/*!
 * imports (local).
 */

var locals_path = path.resolve(__dirname, 'locals.json')
var locals = require(locals_path)
var template_path = path.resolve(__dirname)
var temporary_dir = path.resolve(__dirname, 'tmp')

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
  { file: 'index.js', pattern: locals.package_description }
]

/*!
 * tests.
 */

test('sprout-commonjs-lib', function (t) {
  t.plan(parameters.length)

  sprout
    .add('commonjs-lib', __dirname)
    .then(function () {
      rimraf.sync(temporary_dir)
    })
    .then(function () {
      sprout.init('commonjs-lib', temporary_dir, options)
    })
    .done(function () {
      parameters.forEach(function (p) {
        var file = path.resolve(temporary_dir, p.file)
        t.assert(fs.readFileSync(file, 'utf8').match(p.pattern), p.file)
      })
    })
})
