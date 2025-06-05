'use strict';

module.exports = () => {
  return {
    sequelize: {
      dialect: 'mysql',
      database: '',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
    },
  };
};
