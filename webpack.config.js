module.exports = {
    entry: {
        javascript: './app.js'
    },
    output: {
        path: './',
        filename: 'bundle.js'
    },
    
    module: {
        rules: [
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ],

        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|forge\.bundle\.js)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader:'style!css!'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },

    devServer: {
        historyApiFallback: true
    }
}