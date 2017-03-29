var rule30 = require('../')

var test = require('tape')

test('Rule 30 on array', function (t) {
  t.plan(1)
  t.same(rule30([0, 0, 1, 0, 1]), [0, 0, 1, 1, 0, 1, 0])
})