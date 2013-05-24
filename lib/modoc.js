/*
 * modoc
 * https://github.com/pescalad/modoc
 *
 * Copyright (c) 2013 Pablo Escalada
 * Licensed under the MIT license.
 */

'use strict';

(function() {
    var Modoc, docco, parse;

    docco = require('docco');
    parse = docco.parse;

    Modoc = module.exports = {
        parse: parse,
        version: '0.1.0'
    };
})();
