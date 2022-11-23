var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

// 在路由中调用中间件，获取用户列表数据并返回到users.html
router.get('/', [userController.getUser], function (req, res, next) {
  res.render('users', { data: req.data });
});

module.exports = router;
