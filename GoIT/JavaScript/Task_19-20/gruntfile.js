module.exports = function(grunt) {

  grunt.initConfig({
/*JS files*/
    uglify: {
      dist: {
        src: ['src/js/script.js'],
        dest: 'build/js/script.main.js'
      }
    },
/*CSS files*/
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
        'build/css/style.main.css' : ['src/css/style.css']
        }
      }
    },
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'src/css',
        src: ['*.scss'],
        dest: 'src/css',
        ext: '.css'
      }]
    }
    },
    watch: {
      sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['src/css/*.scss'],
      tasks: ['sass'],
      }
    }     
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass'], ['cssmin'], ['uglify']);
};