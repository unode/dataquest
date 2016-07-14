({
    appDir: "../",
    baseUrl: "js/",
    dir: "../../client-build",
    optimize: "none",
    optimizeCss: "none",

    // don't remove the build dir every time
    keepBuildDir: true,

    paths: {
        "jquery": "lib/require-jquery"
    },

    modules: [
        //Optimize the require-jquery.js file by applying any minification
        //that is desired via the optimize: setting above.
        {
            name: "jquery"
        },

        {
            name: "game",
            exclude: ["jquery"]
        },

        {
            name: "home",
            // Exclude the jquery module since it is included already in require-jquery.js
            exclude: ["jquery", "game"]
        }
    ],

    pragmas: {
        devHost: true,
        prodHost: false
    }
})
