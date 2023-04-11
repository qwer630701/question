const TransformPages = require("uni-read-pages");
const { webpack } = new TransformPages();
module.exports = {
  publicPath: "/",
  configureWebpack: {
    plugins: [
      //通过自动读取 pages.json 作为路由表的方式
      new webpack.DefinePlugin({
        ROUTES: webpack.DefinePlugin.runtimeValue(() => {
          const tfPages = new TransformPages({
            includes: ["path", "name", "aliasPath", "meta"],
          });
          return JSON.stringify(tfPages.routes);
        }, true),
      }),
    ],
  },
  //需要使用uni-app 条件编译的npm安装组件
  transpileDependencies: [
    "uview-ui",
    "mp-html",
    "mp-html/dist/uni-app/components/mp-html/mp-html",
  ],
};
