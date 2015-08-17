module.exports = {
    entry: './name-manager.js',
    output: {
        filename: './site/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader' }
        ]
    }
};