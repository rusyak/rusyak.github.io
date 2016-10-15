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
    }  
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['cssmin'], ['uglify']);
};