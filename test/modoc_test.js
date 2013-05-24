'use strict';

var modoc = require('../lib/modoc.js'),
    fs = require('fs');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['test'] = {
    setUp: function(done) {
        // setup here
        done();
    },
    'parse': function(test) {
        var file = {};
        file.name = './test/example.js';
        file.content = fs.readFileSync(file.name).toString();
        test.expect(1);
        test.equal(modoc.parse(file.name, file.content).length, 1,
            'should be 1');
        test.done();
    },
    'version': function(test) {
        test.expect(1);
        // tests here
        test.equal(modoc.version, '0.1.0', 'should be 0.1.0');
        test.done();
    },
};
