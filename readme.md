# sprout-commonjs-lib

[![Build Status](http://img.shields.io/travis/wilmoore/sprout-commonjs-lib.svg)](https://travis-ci.org/wilmoore/sprout-commonjs-lib) [![Code Climate](https://codeclimate.com/github/wilmoore/sprout-commonjs-lib/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/sprout-commonjs-lib) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

> Project scaffolding for bootstrapping a Node/CommonJS library package.

###### Installation / Usage

    npm install -g sprout
    sprout add commonjs-lib https://github.com/wilmoore/sprout-commonjs-lib
    sprout init commonjs-lib my-new-lib

> NOTE: You may pass a relative path (as depicted above) or a full path.

###### npm stats

[![npm](https://img.shields.io/npm/v/sprout-commonjs-lib.svg)](https://www.npmjs.org/package/sprout-commonjs-lib) [![NPM downloads](http://img.shields.io/npm/dm/sprout-commonjs-lib.svg)](https://www.npmjs.org/package/sprout-commonjs-lib) [![Dependency Status](https://gemnasium.com/wilmoore/sprout-commonjs-lib.svg)](https://gemnasium.com/wilmoore/sprout-commonjs-lib) 

## Demo

[![demo](https://cloudup.com/cvqmuxPKbym+)](http://youtu.be/pbl2az38PeQ)

## Features

 * Lint & style checking via [JavaScript Standard Style](https://github.com/feross/standard).
 * Automated test setup via [Tape](https://github.com/substack/tape).
 * CI via [Travis CI](travis-ci.org).
 * README with awesome repo badges via [Shields.IO](http://shields.io).
 * Changelog per [Keep a CHANGELOG](http://keepachangelog.com).
 * Contributer [Guidelines](https://github.com/blog/1184-contributing-guidelines).
 * [EditorConfig](http://editorconfig.org) support.
 * [MIT](LICENSE) license.

## Input-based template variables

 * `github_user_name` GitHub user name.
 * `github_user_email` GitHub user email.
 * `package_name` Name of the project.
 * `repo_name` GitHub repository name (without username).
 * `package_description` Package description.
 * `travis` Whether to use Travis CI.

## Derived template variables

 * `author_full_name` Package author's full name.
 * `date` Current date.
 * `github_clone_url` GitHub clone URL.
 
## Alternatives

- [generator-nm](https://github.com/sindresorhus/generator-nm)
- [sprout-node](https://github.com/carrot/sprout-node)

## Licenses

[![LICENSE](http://img.shields.io/npm/l/sprout-commonjs-lib.svg)](license)

