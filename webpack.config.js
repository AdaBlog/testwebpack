var webpack=require('webpack');//导入webpack
module.exports={

    entry:{
        path:__dirname+"/src/main.js"//入口文件
    },
    output:{
        path:__dirname+"/public",//导出文件夹
        filename:"bundle.js"//导出文件
    },
    devtool:'eval-source-map',
    module:{
       rules:[
           {
               test: /(\.jsx|\.js)$/,
               use: {
                   loader: "babel-loader",
               },
               exclude: /node_modules/
           },
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   }, {
                       loader: "css-loader"
                   }
               ]
           },
           {
               test: /\.scss$/,
               use: [{
                   loader: "style-loader" // 将 JS 字符串生成为 style 节点
               }, {
                   loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
               }, {
                   loader: "sass-loader" // 将 Sass 编译成 CSS
               }]
           },
           {
               test: require.resolve('jquery'),
               use: [{
                   loader: 'expose-loader',
                   options: '$'
               },{
                   loader: 'expose-loader',
                   options: 'jQuery'
               }]
           }
       ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            // "$": "jquery",
            // "jQuery": "jquery",
            // "window.jQuery": "jquery",
            Popper:['popper.js','default']
        })
    ],
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port:8090
    }
}