module.exports = function(grunt) {
    grunt.initConfig({
        config: {
          dev: {
            options: {
              variables: {
                'apiBaseUrl': 'http://localhost/erd',
                'cacheBuster': new Date().toJSON().replace(/-/g, '').replace(/:/g, '').replace('T', '').replace('.', '-')
              }
            }
          },
          preprod: {
            options: {
              variables: {
                'apiBaseUrl': 'http://localhost/erd',
                'cacheBuster': new Date().toJSON().replace(/-/g, '').replace(/:/g, '').replace('T', '').replace('.', '-')
              }
            }
          },
          prod: {
            options: {
              variables: {
                'apiBaseUrl': 'http://localhost/erd',
                'cacheBuster': new Date().toJSON().replace(/-/g, '').replace(/:/g, '').replace('T', '').replace('.', '-')
              }
            }
          }
        },
        replace: {
          dist: {
            options: {
              variables: {
                'apiBaseUrl': '<%= grunt.config.get("apiBaseUrl") %>',
                'timestamp': '<%= grunt.config.get("cacheBuster") %>'
              },
              force: true
            },
            files: [
              {src: ['app_modules/main/config.tpl.js'], dest: 'app_modules/main/config.js'},
              {src: ['app_modules/main/index.tpl.html'], dest: 'build/index.html'}
            ]
          }
        },
        jshint: {
            options: {
                browserify: true,
                browser: true,
                devel: true
            },
            all: [
                'Gruntfile.js',
                'app_modules/**/*.js'
            ]
        },
        simplemocha: {
            all: [
                'tests/test-suite.js',
            ]
        },
        watch: {
            options: {
                livereload: true,
                spawn: false
            },
            configFiles: {
                files: ['Gruntfile.js'],
                tasks: ['build'],
                options: {
                    reload: true
                }
            },
            js: {
                files: [
                    'app_modules/**/*.js',
                    'vendor/**/*'
                ],
                tasks: ['build']
            },
            tpl: {
                files: [
                    'app_modules/**/*.html'
                ],
                tasks: ['browserify:dev']
            },
            css: {
                files: ['app_modules/**/*.less'],
                tasks: ['less']
            },
        },
        less: {
            dist: {
                files: {
                    'build/styles.css': 'app_modules/main/styles.less'
                },
                options: {
                    compress: false,
                    sourceMap: true,
                    sourceMapFilename: 'build/styles.css.map',
                    sourceMapURL: 'styles.css.map'
                }
            }
        },
        connect: {
            server: {
                options: {
                    base: 'build',
                    open: true,
                    livereload: true
                }
            }
        },
        browserify: {
            dev: {
                src: ['app_modules/**/*.js'],
                dest: 'build/app.js',
                options: {
                    browserifyOptions: {
                        debug: true // Enable (inline) source map
                    }
                }
            },
            test: {
                src: ['tests/**/*_spec.js'],
                dest: 'tests/test-suite.js'
            },
            options: {
                transform: [
                    ['require-globify'],
                    ['node-underscorify', {
                        templateSettings: {variable: 'data'},
                        requires: [
                            {variable: '_', module: 'lodash'},
                            {variable: 'i18n', module: 'i18next-client'}
                        ]
                    }]
                ]
            }
        },
        uglify: {
            dist: {
                src: ['build/app.js'],
                dest: 'build/app.js'
            }
        },
        clean: [
            'build/styles.css',
            'build/styles.css.map',
            'build/app.js',
            'tests/test-suite.js',
            'build/fonts/glyphicons-halflings-regular.*'
        ]
    });

    grunt.loadNpmTasks('grunt-config');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-less');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', ['jshint', 'browserify:test', 'simplemocha']);
    grunt.registerTask('build', ['less', 'browserify:dev']);
    grunt.registerTask('preprod', ['config:preprod', 'replace', 'build']);
    grunt.registerTask('dev', ['config:dev', 'replace', 'build']);
    grunt.registerTask('live', ['dev', 'connect', 'watch']);
    grunt.registerTask('default', ['config:prod', 'replace', 'build', 'uglify']);
};
