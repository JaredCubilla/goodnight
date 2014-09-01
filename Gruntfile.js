module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("boilerplate.jquery.json"),

		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title %>\n" +
				" *  Made by <%= pkg.author.name %>, licensed under <%= pkg.licenses[0].type %> \n" +
				" */\n"
		},

		jshint: {
			files: ["boilerplate.js", "Gruntfile.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		uglify: {
			my_target: {
				src: ["boilerplate.js"],
				dest: "boilerplate.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		
		watch: {
		    files: ["boilerplate.js", "demo/index.html"],
			tasks: ["jshint", "uglify"]
		}

	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["jshint", "uglify", "watch"]);
};