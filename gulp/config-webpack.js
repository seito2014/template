var path = require('path');
var webpack = require('webpack');

module.exports = {
    output: {
        filename: '[name].js'
    },
    resolve: {
        root: [path.join(__dirname, "../bower_components")],
        extensions: ['', '.js', '.html'],
        alias: {
            bower: 'bower_components',
            jquery: __dirname + '/../bower_components/jquery/dist/jquery.js',
            ScrollMagic: __dirname + '/../bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
            ScrollMagicPlugin: __dirname + '/../bower_components/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
            ScrollMagicDebug: __dirname + '/../bower_components/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
        }
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: "library",
            filename: "library.js"
        })
    ]
};
