const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ROOT_DIRNAME = path.resolve(__dirname, '..');

module.exports = {
    target: "web",
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        'main': path.resolve(ROOT_DIRNAME,'src', 'index.tsx'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(ROOT_DIRNAME, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                include: [ path.resolve(ROOT_DIRNAME, 'src') ],
                use:  "babel-loader",
            },
            {
                test: /\.(ts|tsx)?$/,
                use: [{
                        loader: 'ts-loader',
                        options: { transpileOnly: true }
                    }],
                include: [  path.resolve(ROOT_DIRNAME, 'src') ],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
        ]
    },   
    plugins: [
        new CleanWebpackPlugin(path.join(ROOT_DIRNAME,'dist')),
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_DIRNAME, 'src',"./index.html"), 
            filename: `./index.html`,        
            chunks: ['main'],                         
        })
    ],
    resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
    devtool: 'inline-source-map',
    devServer: {
        static: {  directory: path.join(ROOT_DIRNAME, 'dist') },
        host: "localhost",
        compress: true, port: 3000, hot: true, open: true, 
        historyApiFallback:{
            disableDotRule: false,
            rewrites: [  
                { from: "^/", to: "/dist/index.html"},            
            ]
        },
    }
};




