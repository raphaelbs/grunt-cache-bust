'use strict';

var grunt = require('grunt');

module.exports = {

    relativepath: function(test) {
        test.expect(3);

        var html = grunt.file.read('tmp/relativepath/relativepath.html');
        test.ok(html.match(/"assets\/css\/application\.123456789\.css"/), 'testing /assets/css/application.css replaced in HTML');

        var css = grunt.file.read('tmp/relativepath/assets/css/application.123456789.css');
        test.ok(css.match(/url\(\.\.\/images\/testbg\.123456789\.png\)/), 'testing ../images/testbg.png replaced in busted CSS');
        test.ok(css.match(/url\(\.\.\/\.\.\/assets\/images\/testbg\.123456789\.png\)/), 'testing ../../assets/images/testbg.png replaced in busted CSS');

        test.done();
    }

};
