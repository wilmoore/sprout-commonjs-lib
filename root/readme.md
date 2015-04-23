# <%= package_name %> [![Build Status](http://img.shields.io/travis/wilmoore/<%= repo_name %>.svg)](https://travis-ci.org/wilmoore/<%= repo_name %>) [![Code Climate](https://codeclimate.com/github/wilmoore/<%= repo_name %>/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/<%= repo_name %>) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

> <%= package_description %>

###### npm install

    npm install <%= package_name %> --save

###### npm stats

[![npm](https://img.shields.io/npm/v/<%= package_name %>.svg)](https://www.npmjs.org/package/<%= package_name %>) [![NPM downloads](http://img.shields.io/npm/dm/<%= package_name %>.svg)](https://www.npmjs.org/package/<%= package_name %>) [![Dependency Status](https://gemnasium.com/wilmoore/<%= repo_name %>.svg)](https://gemnasium.com/wilmoore/<%= repo_name %>) 

## Example

```js
var <%= S.camelize(package_name) %> = require('<%= package_name %>');
<%= S.camelize(package_name) %>('training')
//=> training
```

## Features

* Supports …

## Anti-Features

* Will never …

## API

> `<%= S.camelize(package_name) %>(string)`

###### Arguments

 * `string: (…String)` _The string literal_.

###### Returns

 * `(String)` _The new string_.

## Alternatives

* [example](https://example.com)

## Licenses

[![LICENSE](http://img.shields.io/npm/l/<%= package_name %>.svg)](license)

