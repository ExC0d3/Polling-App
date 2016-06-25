module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default : {
                src: ["**/*.ts", "!node_modules/**", 'bin/**'],
                dest:'build',
                options: {
                    module: 'commonjs'
                }
            }
        },
        clean: {
            all: ['**/*.js', '**/*.js.map', '!build/**',  '!node_modules/**', '!Gruntfile.js', '!bin/**', 'test/**/*.js', 'test/**/*.js.map']
        },
        copy:{
            main: {
                src: ['public/**','views/**'],
                expand:'true',
                dest:'build'
            }
        },
        watch: {
            files: ['**/*.ts'],
            options:{
                reload: false
            },
            tasks:['ts:default','copy']
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
};
