module.exports = function(grunt) {
    // Définition de la configuration globale
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Config de chaque plugin
        cssmin:{
            app: {
                files: {
                    'dist/app.min.css': ['css/*.css']
                }
            }
        },
        concat: {
            app: {
                src: [
                    'node_modules/angular/angular.min.js',
                    'app/app.module.js',
                    'app/*.component.js',
                    'app/*.controller.js'
                ],
                dest: 'dist/app.js'
            }
        },
        watch: {
            cssSrc: {
                files: ['**/*.css', '!node_modules/**'],
                tasks: ['cssmin:app']
            },
            jsSrc: {
                files: ['**/*.js'],
                tasks: ['concat:app']
            }

        }
    });

    // Chargement des plugins.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Déclaration des taches exécutables.
    grunt.registerTask('default',['cssmin:app', 'concat:app']);
    grunt.registerTask('dev',['watch']);
}
