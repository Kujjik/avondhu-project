const path = require ('path')
const htmlWebpackPlagun=require ('html-webpack-plugin')

module.exports = {
    mode: 'development',

    entry: {
        filename: path.resolve (__dirname, 'src/index.js')
    },
    output:{
        path:path.resolve (__dirname, 'dist'),
        filename:'index.js',
        clean: true
    },

    devServer: {
        port:9000,
        compress:true,
        hot:true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },

    module: {
        rules: [
            {
                test:/\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
           /* {
                test:/\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:'[name].[ext]',
                            outputPath:'./images',
                            useRelativePath: true
                        }
                    }
                ]
            }*/
        ]
    },

    plugins: [
        new htmlWebpackPlagun(
            {
                filename:'index.html',
                template:'src/index.html'
            }
        )
    ]
}