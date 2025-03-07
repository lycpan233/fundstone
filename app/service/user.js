'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async index() {
    const { ctx } = this;
    const resp = await ctx.model.User.findOne({
    });
    return resp || {};
  }
}

module.exports = UserService;
