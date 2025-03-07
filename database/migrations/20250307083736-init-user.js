'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { DataTypes } = Sequelize;
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable(
      'user',
      {
        id: {
          type: DataTypes.INTEGER(10).UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          comment: 'ID',
        },
        name: {
          type: DataTypes.STRING(32),
          allowNull: false,
          defaultValue: '',
          comment: '用户名',
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
        comment: '用户信息表',
        indexes: [
          {
            unique: true,
            fields: [ 'mobile' ], // 创建唯一索引
          },
        ],
      });

    return;
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('user');
    return;
  },
};
