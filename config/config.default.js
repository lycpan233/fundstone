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
    password: 'QfS7GFvmMQsoCZU3RX8TGnNYxepU1iTs4IlN9VIzkCLx/FCOxdS7wqCJwt9QYvypcbxMmbkW37tFg6uuIaU/F//enlpge1tjA/G8HbsLNuklO8MOAsFSYAKLBTCix2fd4WP5kn/6U3sIqH3u/+oOq7GoqPU3O1ieYeKGH/4W/a0=',
  };

  config.secretKeys = [
    'sequelize.password',
  ];

  return {
    ...config,
  };
};
