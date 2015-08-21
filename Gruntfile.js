module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
    'http-server': {
      'dev': {
        root: 'build',
        port: 8080,
        host: "localhost",
        ext: "html"
      }
    }

  });
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-http-server');

	grunt.registerTask('default', ['uglify']);
	grunt.registerTask('server', ['http-server']);


};
