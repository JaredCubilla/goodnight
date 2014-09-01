module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			files: ["goodnight.js", "Gruntfile.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		uglify: {
			dist: {
				src: ["goodnight.js"],
				dest: "goodnight.min.js"
			},
		},
		
		watch: {
		    files: ["goodnight.js", "demo/index.html"],
			tasks: ["jshint", "uglify"]
		}

	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["jshint", "uglify", "watch"]);
};