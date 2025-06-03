/* eslint valid-jsdoc: "off" */
const { v4: uuidv4 } = require('uuid');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1736237634841_4285';

  // add your middleware config here
  config.middleware = [];

  config.uuid = uuidv4().replace(/-/g, '');

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.sequelize = { // 数据库链接
    dialect: 'mysql',
    connectionUri: 'mysql://root:666666@127.0.0.1:3306/footstone',
    define: {
      timestamps: false,
      underscored: false,
      freezeTableName: true,
      version: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };

  // 加密字段
  config.secretKeys = [
  ];

  // 验证器
  config.validate = {
    convert: true, // 验证后是否转化类型
  };

  // 错误捕获
  config.onerror = {
    html(error, ctx) {
      ctx.body = '<h3>this is error page</h3>';
    },

    json(error, ctx) {
      ctx.status = 200; // 统一返回 200 错误状态
      ctx.handleError(error);
      ctx.body = {
        code: error.code || 500,
        msg: error.message ? error.message : '服务器开小差了...',
        data: {},
      };
    },

    accepts(ctx) {
      if (ctx.request.path.endsWith('.html')) return 'html';
      return 'json';
    },
  };

  return {
    ...config,
  };
};
