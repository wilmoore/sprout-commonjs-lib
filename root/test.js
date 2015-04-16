'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var <%= S.camelize(package_name) %> = require('./')

/*!
 * parameters.
 */

var parameters = [
  { name: 'default-test', args: [], expected: '<%= S.camelize(package_name) %>' }
]

/*!
 * tests.
 */

test('<%= S.camelize(package_name) %>()', function (t) {
  t.plan(parameters.length)

  parameters.forEach(function (p) {
    var actual = <%= S.camelize(package_name) %>.apply(null, p.args)
    t.equal(actual, p.expected, p.name)
  })
})
