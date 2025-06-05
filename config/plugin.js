/** @type Egg.EggPlugin */
const path = require('path');
module.exports = {
  valuesEncrypt: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-values-encrypt'),
  },

  routerPlus: { // 路由拓展
    enable: true,
    package: 'egg-router-plus',
  },

  sequelize: { // 数据库连接
    enable: true,
    package: 'egg-sequelize',
  },

  validate: { // 参数校验
    enable: true,
    package: 'egg-validate',
  },
};
