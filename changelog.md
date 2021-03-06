# Change Log
All notable changes to this project will be documented in this file (keepachangelog.com).

## 0.11.0 - 2015-05-30
### Added
- add `fixpack` (fixes #3).
- document `fixpack`, `standard`, and `dependency-check` in `contributing.md`.

## 0.10.2 - 2015-05-30
### Added
- add `Dependency checking` note to feature list.

## 0.10.1 - 2015-05-30
### Added
- add `npm run dependency-check`.

## 0.8.1 - 2015-05-12
### Added
- add `release-*` scripts.

## 0.7.9 - 2015-05-11
### Changed
- mention Duo, Bower as alternative install options.

## 0.7.8 - 2015-05-08
### Changed
- correct license link in readme.

## 0.7.7 - 2015-05-08
### Added
- add `.env` and `.env.*` to `root/.gitignore`.

## 0.7.6 - 2015-05-08
### Added
- add `.env` and `.env.*` to `.gitignore`.

### Changed
- correct typo in feature section of changelog.

## 0.7.5 - 2015-05-08
### Changed
- removed orphaned semi-colon from readme example.

## 0.7.4 - 2015-05-07
### Added
- ensure Travis updates to latest npm before running install.

## 0.7.3 - 2015-05-06
### Added
- added more keywords.

### Changed
- fixpack

## 0.7.2 - 2015-05-03
### Removed
- remove package `sync-exec` and require node >=0.12 or iojs.

## 0.7.1 - 2015-05-03
### Removed
- remove package `sync-exec` from `devDependencies`.

## 0.7.0 - 2015-05-03
### Added
- add package `sync-exec` to `dependencies`.

## 0.6.8 - 2015-04-28
### Changed
- switch away from `execSync` to `sync-exec`.

### Added
- add `before_script` with `git config --global …` to `.travis.yml`.

## 0.6.7 - 2015-04-28
### Added
- use osenv for tmpdir().

## 0.6.6 - 2015-04-28
### Added
- module-init has a nice .travis.yml, let's use some of it :).

## 0.6.5 - 2015-04-28
### Added
- add link to github license.

## 0.6.4 - 2015-04-28
### Added
- add contributing.md.
- add "why" section to readme.

### Changed
- revert to tap-spec@^2.2.2.
- organized package.json like fixpack would.

## 0.6.3 - 2015-04-28
### Added
- Added moar feature info.

## 0.6.2 - 2015-04-28
### Added
- Added `.gitattributes` file.

## 0.6.1 - 2015-04-27
### Added
- Added "Reference" section to readme.
- Added "Contributing" section to readme linking to `contributing.md`.
- Added documentation for new variables `simple_name` and `export_name`.

### Changed
- Optimized organization of badges.

## 0.6.0 - 2015-04-26
### Added
- Added support for npm scoped modules.

## 0.5.1 - 2015-04-23
### Changed
- [root/index.js] imports and exports block updated to use ! instead of *.
- npm install --save-dev tape@latest sprout@latest standard@latest

## 0.4.0 - 2015-04-22
### Changed
- [root/readme.md] surround example code block with js code fence.
- [root/contributing.md] inline code fence header package name.
- [root/contributing.md] fix static git repo url.
- [root/contributing.md] add note about running tap only test.

## 0.1.0 - 2015-04-18
### Added
- Initial Version.

