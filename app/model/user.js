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
      tableName: 'user',
      indexes: [
        {
          name: 'uk_email',
          fields: [ 'email' ],
          unique: true,
        },
        {
          name: 'idx_mobile',
          fields: [ 'mobile' ],
        },
      ],
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
