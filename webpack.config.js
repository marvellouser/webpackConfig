const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js',
    },
    
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },


    plugins: [
        new HtmlwebpackPlugin({
            title: 'Output Management',
            template: './index.html'
        }),
    ],
    
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            }
        ]
    },


    mode: 'development',
}

