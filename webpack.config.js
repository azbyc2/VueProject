const path = require('path');
const HtmlWP = require('html-webpack-plugin');
const CleanWP = require('clean-webpack-plugin');
//第一步：暴露出去 
module.exports = {
    // 打包的入口文件：
    entry: path.resolve(__dirname, './src/js/main.js'),
    // 输出
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // 插件配置
    plugins: [
        new HtmlWP({
            // 选择文件
            template: './src/index.html',
            // 输出文件名
            filename: 'index.html',
            // 输出到标签
            inject: 'body'
        }),
        // 清理垃圾文件
        new CleanWP(['dist'])
    ],
    // 模块配置
    module: {
        rules: [

            // css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // less
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader,less-loader']
            },
            // html
            {
                test: /\.(html|tpl)$/,
                use: ['html-loader']
            },

            // 静态资源引用
            {
                test: /\.(png|jpeg|gif|jpg|svg|mp3|ttf)$/,
                use: [ //小于10kb的打包
                    {
                        loader:'url-loader',
                        options: {
                            limit: 10240
                        }
                    }
                ]
            },

            // js
            {
                test: /\.js$/,
                use: ['babel-loader'],
                // 排除
                exclude:path.resolve(__dirname, './node_modules')
            },

            // vue
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            // vue-src
            {
                test:/vue-preview.src.*js$/,
                use: ['babel-loader']
            }
        ]
    }

};