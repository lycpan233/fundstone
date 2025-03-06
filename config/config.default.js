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

  config.sequelize = {
    dialect: 'mysql',
    connectionUri: 'mysql://root:666666@127.0.0.1:3306/footstone',
  };

  config.secretKeys = [
  ];

  return {
    ...config,
  };
};
