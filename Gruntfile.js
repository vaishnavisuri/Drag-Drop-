module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n\n'
            },
            dist: {
                src: ['app/app.js', 'app/common/**/*.js','app/formRenderer/**/*.js', 'app/formBuilder/**/*.js'],
                dest: 'componentBuilder.js',
                nonull: true
            }
        },
      
        watch: {
            scripts: {
                files: ['app/**/*.js'],
                tasks: ['concat']
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'componentBuilder.min.js': ['componentBuilder.js']
                }
            }
        },
		 concat_css: {
          all: {
            src: ["css/*.css"],
            dest: "componentBuilder.css"
         },
       },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-concat-css');



    // Default task(s).


    grunt.registerTask('default', ['concat','uglify','concat_css']);

};
