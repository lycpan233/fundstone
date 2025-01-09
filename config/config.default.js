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

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.uuid = uuidv4().replace(/-/g, '');

  return {
    ...config,
    ...userConfig,
  };
};
