[![Build Status](https://travis-ci.org/prettier/prettier.svg?branch=master)](https://travis-ci.org/prettier/prettier)
[![Coverage Status](https://coveralls.io/repos/github/FrontEndCapstone/Reviews/badge.svg?branch=master&service=github)](https://coveralls.io/github/FrontEndCapstone/Reviews?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/29769fb0f8f18fe5fcda/maintainability)](https://codeclimate.com/github/FrontEndCapstone/Reviews/maintainability)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Zill-Woah 

> Zill-Woah is a emulation of the real estate and rental marketplace, Zillow site's page.  This repo contains the "Navigation bar" and "Image Gallery" component for that project, which fetches house property information and images from the database, displays them to the user via a React frontend, and allows the user to interact with these components

## Demo

http://otc-proxy.us-west-1.elasticbeanstalk.com/

## Related Projects

  - [Proxy server for running all components](https://github.com/Only-the-Best/Jack-Li-Proxy)
  - [Additional-information-service component](https://github.com/Only-the-Best/additional-information-service)
  - [Sidebarcomponent](https://github.com/Only-the-Best/sidebar-service)
  - [Main description component](https://github.com/Only-the-Best/Main-Desc-Service)

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)

## Requirements

- Node 6.13.0

## Development

Development requires eslint (for code linting) and Jest (for testing), along with several plugins for each.  All dev dependencies are listed in the package.json file.

Contributions are welcome, but please ensure that you add tests and that all tests pass.  A drop in coverage, failing tests, or linter errors will cause the build to fail and the contribution to require revision.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack-cli
npm install
```

