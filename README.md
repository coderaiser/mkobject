# MKObject [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

Make object from keys and values.

## Install

```
npm i mkobject
```

## mkobject(keys, values)
- `keys` **Array**
- `values` **Array** 

```js
const mkobject = require('mkobject'),

mkobject(['a', 'b'], [1, 2]);
// returns
{
  a: 1,
  b: 2,
}
```

## Environments

In old `node.js` environments that not fully supports `es2015`, `mkobject` could be used with:

```js
var mkobject = require('mkobject/legacy');
```

## License
MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/mkobject.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/mkobject/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/mkobject.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/mkobject/badge.svg?branch=master&service=github
[NPMURL]:                   https://npmjs.org/package/mkobject "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/mkobject  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/mkobject "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"
[CoverageURL]:              https://coveralls.io/github/coderaiser/mkobject?branch=master

