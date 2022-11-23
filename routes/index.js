var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

/* 获取首页模板*/
// 定义组数据
const data = {
  firstName: '甜甜',
  lastName: 'ExpressFrame',
};
router.get('/', function (req, res, next) {
  res.render('index', { data: data });
});

// 获取用户信息接口地址
router.get('/get_user', userController.showUser);

module.exports = router;
