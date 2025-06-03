'use strict';

const Service = require('egg').Service;
const crypto = require('crypto');

class UserService extends Service {
  async index() {
    const { ctx } = this;
    const resp = await ctx.model.User.findOne({});
    return resp || {};
  }

  /**
   * 密码加盐
   * @param {string} password - 用户密码
   * @param {string} salt - 盐
   * @return {Object} - result
   */
  hashPassword(password, salt) {
    const key = crypto.pbkdf2Sync(password, salt, 1000, 32, 'sha512');
    return {
      salt,
      key: key.toString('hex'),
    };
  }

  /**
   * @typedef User
   * @type {object}
   * @property {string} id - an ID.
   * @property {string} nickname - your name.
   * @property {number} age - your age.
   */

  /**
   * 创建用户
   * @param {object} body - 入参
   * @param {string} body.email - 用户邮箱
   * @param {string} [body.nickname] - 用户昵称
   * @param {string} [body.password] - 用户密码
   * @return {User} res
   */
  async create(body) {
    const { ctx } = this;
    // 验证邮箱是否存在
    let userInfo = await ctx.model.User.findOne({
      attributes: [ 'id' ],
      where: {
        email: body.email,
      },
      raw: true,
    });
    if (userInfo) ctx.fail('USER_HAS_EXISTED');

    // 用户昵称
    let nickname = body.nickname;
    if (!nickname) {
      nickname = '这个家伙没有昵称#' + ctx.helper.generateUuid().slice(0, 6);
    }

    // 密码加盐
    const salt = ctx.helper.generateUuid();
    const password = body.password || '123456'; // 设置默认密码
    const { key } = this.hashPassword(password, salt);

    // 生成用户
    userInfo = await ctx.model.User.create({
      email: body.email,
      nickname,
      password: key,
      salt,
    });

    return userInfo;
  }
}

module.exports = UserService;
