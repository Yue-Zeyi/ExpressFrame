var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// error页面路由
// router.get('/error', function (req, res, next) {
//   res.render('error');
// });

// 获取用户信息
router.get('/get_user', userController.showUser);

module.exports = router;
