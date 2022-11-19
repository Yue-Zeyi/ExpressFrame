# ExpressFrame

一个开箱即用的 Node.js + Express + MySQL 框架

## 安装

```
npm i
```

## 使用

创建数据库，并且新建用户表 user，设计如下图

![](https://pic.zeyiwl.cn/yunimg/20221119193505.png)

`Kenx`操作数据库，增删改查已配置，及一个获取用户信息接口，如果你配置完数据库之后，可以尝试测试接口：

```html
http://localhost:3000/get_user
```

## 启动

```
npm run start
```

访问：http://127.0.0.1:3000/

## 目录结构

```
ExpressFrame
├─ .gitignore
├─ app.js
├─ bin
│  └─ www 启动入口文件
├─ config.js  数据库配置文件
├─ controllers  数据库操作目录
│  └─ user.js
├─ models 模板数据目录
│  ├─ base.js
│  ├─ knex.js
│  └─ user.js
├─ package-lock.json
├─ package.json
├─ public 静态文件目录
│  ├─ css
│  │  ├─ error.css
│  │  ├─ h-ui.reset.css
│  │  └─ style.css
│  ├─ images
│  │  └─ 404.png
│  └─ js
├─ README.md
├─ routes 路由目录
│  ├─ index.js
│  └─ users.js
└─ views  视图目录
   ├─ error.html
   └─ index.html

```
