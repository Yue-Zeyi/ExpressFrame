# ExpressFrame

一个开箱即用的 Node.js + Express + MySQL 框架，采用Knex操作数据库。

可以当作后端使用，创建不同的接口，也可以前后端一起使用，直接渲染前端数据。

![](https://pic.zeyiwl.cn/yunimg/20221123170626.png)

## 安装

```
npm i
```

## 启动

```
npm run start
```

访问：http://127.0.0.1:3000/

## 使用

创建数据库，并且新建用户表 user，设计如下图

![](https://pic.zeyiwl.cn/yunimg/20221119193505.png)

`Kenx`操作数据库，已经配置基本操作(增删改查)方法。具体使用请参考如下两种方式。

### 数据接口

在`models`中定义`user.js`模块

```JavaScript
const Base = require('./base');

class User extends Base {
  // 定义参数默认值为 user 表
  constructor(props = 'user'){
    super(props);
  }
}

module.exports = new User();
```

在`controllers/user.js`中新增方法`showUser`

```javascript
showUser: async function (req, res, next) {
    try {
      let userData = await User.all();
      res.json({
        code: 200,
        message: '操作成功',
        data: userData,
      });
    } catch (e) {
      res.json({ code: 0, message: '操作失败', data: e });
    }
  },
```

在`routes/index.js`中定义获取用户信息的路由

```javascript
// 获取用户信息接口地址
router.get('/get_user', userController.showUser);
```

此时，尝试访问 http://127.0.0.1:3000/get_user 测试接口，即可返回`JSON`数据。

![](https://pic.zeyiwl.cn/yunimg/20221123172317.png)

### 直接渲染

在`controllers/user.js`中新增方法`getUser`

```javascript
getUser: (req, res, next) => {
    User.all()
      .then((result) => {
        req.data = result;
        next();
      })
      .catch((error) => {
        next(error);
      });
  },
```

在`routers/users.js`中设置路由，并配置中间件

```javascript
var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

// 在路由中调用中间件，获取用户列表数据并返回到users.html
router.get('/', [userController.getUser], function (req, res, next) {
  res.render('users', { data: req.data });
});

module.exports = router;
```

在`views/users.html`中渲染数据：

```javascript
 <table width="500" cellpadding="0" cellspacing="0">
    <tr>
      <th>ID</th>
      <th>姓名</th>
      <th>手机号</th>
    </tr>
    <% data.forEach(dt=> { %>
      <tr>
        <td>
          <%= dt.id %>
        </td>
        <td>
          <%= dt.name %>
        </td>
        <td>
          <%= dt.phone %>
        </td>
      </tr>
      <%}) %>
  </table>
```

浏览器访问http://127.0.0.1:3000/users此时数据已经渲染到 `HTML` 页面中。

![image-20221123172358453](https://pic.zeyiwl.cn/yunimg/20221123172358.png)

## 目录结构

```
expressDemo
├─ .gitignore
├─ app.js
├─ bin
│  └─ www
├─ config.js
├─ controllers
│  └─ user.js
├─ models
│  ├─ base.js
│  ├─ knex.js
│  └─ user.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ css
│  │  └─ style.css
│  ├─ images
│  │  └─ 404.png
│  └─ js
├─ README.md
├─ routes
│  ├─ index.js
│  └─ users.js
└─ views
   ├─ error.html
   ├─ index.html
   └─ users.html

```
