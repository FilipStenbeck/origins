module.exports = function (grunt) {

	require('time-grunt')(grunt);

	grunt.initConfig({
    browserify: {
  		dist: {
    		files: {
      			'build/browserify-bundle.js': ['js/app.js']
    		},
    		options: {
    		}
  		}
		},
		clean: ["build/"],
		watch: {
	  		scripts: {
	    		files: ['js/**/*.js', 'test/spec/**/*.js'],
	    		tasks: ['browserify'],
	    			options: {
	      			spawn: false,
	    		},
	  		},
	  		livereload: {
              options: {
                  livereload: '<%= connect.options.livereload %>'
              },
              files: [
                  '*.html',
                  'style/{,*/}*.css',
                  'build/browserify-bundle.js',
                  'test/build/specs.js'
              ]
            }
		    },
        connect: {
          options: {
              port: 9001,
              livereload: 35729,
              hostname: 'localhost'
          },
          livereload: {
              options: {
                  open: true,
              }
          }
      }
 	});


  grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.registerTask('serve', ['build', 'connect:livereload', 'watch']);

	grunt.registerTask('build', ['clean', 'browserify']);

	// Default task(s)
	grunt.registerTask('default', ['serve']);
};
