'use strict'

/*!
 * imports.
 */

var format = require('util').format

/*!
 * exports.
 */

module.exports = <%= export_name %>

/**
 * <%= package_description %>
 *
 * @param {String} string
 * string literal.
 *
 * @return {String}
 * string literal.
 */

function <%= export_name %> (string) {
  return format('%s', string)
}
