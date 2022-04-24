# 使用 Typescript 重构 axios

Axios 是一个基于 `promise` 网络请求库，作用于`node.js` 和浏览器中。 它是 isomorphic 的(即同一套代码可以运行在浏览器和`node.js`中)。在服务端它使用原生 node.js `http` 模块, 而在客户端 (浏览端) 则使用 `XMLHttpRequests`。

## 前言

检验学习成果最直接的方式就是造论子。  
最近刚换工作，项目使用的是`TypeScript`。学习之后，干脆造个轮子。网上看到很多`axios`相关的轮子，使用`TypeScript`造一个`axios`的轮子。

## 特性

- 从浏览器创建 `XMLHttpRequests`
- 从 node.js 创建 `http` 请求
- 支持 `Promise` API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 `XSRF`

## 项目目录

项目分为客户端（examples 文件夹）和服务端（server 文件夹）。客户端主要是用来检验重构功能的 demo，采用 TypeScript 按照模块化进行编写；服务端是用来响应 demo 中发出的请求，采用 express 编写。  
目录结构：

```
├─ .gitignore
├─ index.html
├─ package.json
├─ README.md
├─ tsconfig.json
├─ tslint.json
├─ examples           // 每个功能点的demo
├─ server             // 服务端
└─ src                // 源码目录
    ├─ axios.ts
    ├─ defaultes.ts
    ├─ cancel
    ├─ core
    ├─ helpers
    └─ types
```

## 项目运行

```bash
# 克隆项目到本地
git clone https://github.com/2513022260/ts-axios.git

# 进入项目目录
cd ts-axios

# 安装依赖
npm install

# 同时打开客户端和服务端
npm run server | npm start
```
