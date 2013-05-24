'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        nodeunit: {
            files: ['test/**/*_test.js'],
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                src: ['lib/**/*.js']
            },
            test: {
                src: ['test/**/*.js']
            },
        },
        jsbeautifier: {
            gruntfile: {
                src: '<%= jshint.gruntfile.src %>'
            },
            lib: {
                src: '<%= jshint.lib.src %>',
            },
            test: {
                src: '<%= jshint.test.src %>',
            },
            options: {
                indent_size: 4,
                indent_char: " ",
                indent_level: 0,
                indent_with_tabs: false,
                preserve_newlines: true,
                max_preserve_newlines: 10,
                jslint_happy: false,
                brace_style: "collapse",
                keep_array_indentation: false,
                keep_function_indentation: false,
                space_before_conditional: true,
                eval_code: false,
                indent_case: false,
                wrap_line_length: 80,
                unescape_strings: false
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib: {
                files: '<%= jshint.lib.src %>',
                tasks: ['jshint:lib', 'nodeunit']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'nodeunit']
            },
        },
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    // Default task.
    grunt.registerTask('default', ['jshint', 'nodeunit']);

};
