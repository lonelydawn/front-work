# 前端开发框架

> 年轻时吃过的苦，都会成为你未来的路。

## 引言

1. 因为个人日常喜欢写原生代码，于是做了这个适用于原生项目 (Native Code) 的轻量级框架，以用于日后二次开发。
2. 框架采用前端构建工具 webpack 以编译高版本 es 语法 和 sass/scss/css 样式文件并将其打包、压缩和注入。
3. 依靠 window.location.hash 开发前端路由 (front-end router) 以实现单页面 (single page) 应用。
4. 使用 Koa (Node 框架) 建立服务端 (server) 以支持跨域请求 (cross origin request)。
5. 使用 eslint 检查 javascript 代码语法和格式错误。
6. 内置了一个简单 demo，你可以 clone下来查看。

## 开始

##### 安装依赖

可以使用以下命令安装依赖：

```
npm install
```

##### 开发

运行

```
npm start
```

启动 webpack 服务，以调试项目。

##### 生产

如果要发布生产版本，运行

```
npm run build
```

以编译和压缩源代码。

之后运行

```
node app.js
```

启动一个 [koa](https://github.com/koajs/koa) 搭建的服务端。

## 路由配置 (Router Config)

在 ./src/javascripts/routes.js 中

1. 修改作为容器的 DOM 节点 (默认值为 app)
2. 引入要跳转的页面
3. 将路由配置项添加到 router 中

####  
