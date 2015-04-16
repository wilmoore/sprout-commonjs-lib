'use strict'

/**
 * imports.
 */

var format = require('util').format

/**
 * exports.
 */

module.exports = <%= S.camelize(package_name) %>

/**
 * <%= package_description %>
 *
 * @param {String} string
 * string literal.
 *
 * @return {String}
 * string literal.
 */

function <%= S.camelize(package_name) %> (string) {
  return format('%s', string)
}
