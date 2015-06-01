module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      release: {
        src: ['js/values.js', 'js/prompt.js', 'js/getImages.js'],
        dest: 'release/main.js'
      }
    },
    copy: {
      release: {
        src: 'manifest.json',
        dest: 'release/main.js'
      }
    },
    jshint: {
      files: ['js/values.js', 'js/prompt.js', 'js/getImages.js', 'js/events.js', 'manifest.json']
    },
    watch: {
      files: ['<%= jshint.files %>', 'manifest.json'],
      // files: ['js/values.js', 'js/prompt.js', 'js/getImages.js', 'js/events.js', 'manifest.json'],
      tasks: ['default']
    },
  });

  //Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Register tasks
  // grunt.registerTask('default', ['jshint', 'concat', 'copy']);
  grunt.registerTask('default', ['concat', 'copy']);

};
