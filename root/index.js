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
 * @param {*} self
 * `this` value.
 *
 * @return {*}
 * self.
 */

function <%= S.camelize(package_name) %> (self) {
  return format('%s', '<%= S.camelize(package_name) %>')
}
