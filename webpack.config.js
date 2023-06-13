const path = require ('path')
const htmlWebpackPlugin = require ('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',

    entry: {
        filename: path.resolve (__dirname, 'src/index.js')
    },
    output:{
        path:path.resolve (__dirname, 'dist'),
        filename:'index.js',
        publicPath: '/dist',
    },

    devServer: {
        port: 9000,
        compress: false,
        liveReload: true,
        hot: false,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    optimization: {
        minimize: false,
    },

    module: {
        rules: [
            {
                test:/\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
        ]
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/image", to: "image" },
            ],
        }),
        new htmlWebpackPlugin(
            {
                filename:'./index.html',
                template: path.resolve(__dirname, './src/index.html'),
            }
        )
    ]
}
