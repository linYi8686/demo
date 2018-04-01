const HtmlWebpackPlugin=require("html-webpack-plugin"); //生成html
var OpenBrowserPlugin = require('open-browser-webpack-plugin');//帮助打开浏览器
const path=require('path');
module.exports={
    entry:"./src/js/index.js",
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html"
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
           })
      ],
      module:{
		loaders:[{
			test:/\.less$/,
			loader:'style-loader!css-loader!less-loader'

        },
        {
            test: /\.js?$/,//表示要编译的文件的类型，这里要编译的是js文件
            loader: 'babel-loader',//装载的哪些模块
            exclude: /node_modules/,//标识不编译node_modules文件夹下面的内容
            query: {//具体的编译的类型，
                compact: false,//表示不压缩
                presets: [ 'react']//我们需要编译的是react
                }
         }]
    },
    resolve:{
        extensions:['.less','.js','.css']
    }


  
}