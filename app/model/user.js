'use strict';
const R = require('ramda');
/**
 * @typedef {import('sequelize').Sequelize} Sequelize
 * @typedef {import('sequelize').ModelStatic<Model>} ModelCtor
 */

/**
 * @typedef {Object} UserAttributes
 * @property {number} id
 * @property {string} nickname
 * @property {string} email
 * @property {string} mobile
 * @property {string} salt
 * @property {string} password
 * @property {number} createdAt
 * @property {number} updatedAt
 */

/**
 * @param {object} app - app
 * @param {Sequelize} app.Sequelize - sequelize class
 * @param {Sequelize} app.model - sequelize obj
 * @return {ModelCtor} User
 */
module.exports = app => {
  const { DataTypes } = app.Sequelize;

  const User = app.model.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: 'ID',
      },
      nickname: {
        type: DataTypes.STRING(32),
        allowNull: false,
        defaultValue: '',
        comment: '昵称',
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
        comment: '邮箱',
      },
      mobile: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: '',
        comment: '手机号',
      },
      salt: {
        type: DataTypes.STRING(32),
        allowNull: false,
        comment: '盐',
      },
      password: {
        type: DataTypes.STRING(64),
        allowNull: false,
        comment: '密码',
      },
      createdAt: {
        type: DataTypes.BIGINT(13).UNSIGNED,
        allowNull: false,
        comment: '创建时间',
      },
      updatedAt: {
        type: DataTypes.BIGINT(13).UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        comment: '更新时间',
      },
    },
    {
      tableName: 'user',
      timestamps: true,
      hooks: {
        beforeCreate: user => {
          if (!user.createdAt || R.type(user.createdAt) === 'Date') user.createdAt = Date.now();
          if (!user.updatedAt || R.type(user.updatedAt) === 'Date') user.updatedAt = Date.now();
        },
        beforeUpdate: user => {
          if (!user.updatedAt || R.type(user.updatedAt) === 'Date') user.updatedAt = Date.now();
        },
      },
    }
  );

  User.findByLogin = async function(login) {
    return await this.findOne({
      where: {
        login,
      },
    });
  };

  // don't use arraw function
  User.prototype.logSignin = async function() {
    return await this.update({ last_sign_in_at: new Date() });
  };

  return User;
};
