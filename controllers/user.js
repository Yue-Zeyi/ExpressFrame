// 引用用户模版数据
const User = require('../models/user.js');
const knex = require('../models/knex');

const userController = {
  // showUser 获取用户数据并返回到页面（接口使用）
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
  // 在数据库获取数据信息（views使用）
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
};

module.exports = userController;
