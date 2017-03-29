# rule-30 [![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/rule-30)

> Returns new binary state of array after applying cellular automaton Rule 30

### Install
```
npm install rule-30
```

### Usage

``` js
/*
Pass in binary array of length n (e.g. [0, 1, 0, 0]). Function returns an array of length n+2 after applying Rule 30.
pattern:                   111  110  101  100  011  010  001  000
new state of center value:  0    0    0    1    1    1    1    0
*/

var rule30 = require('rule-30');
console.log( rule30([0, 0, 1, 0, 1]) ) // [0, 0, 1, 1, 0, 1, 0]
```

### API

#### rule30([array of 1s and 0s])

### License
MIT