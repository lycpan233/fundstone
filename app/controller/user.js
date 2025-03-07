'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    const reuslt = await service.user.index();
    ctx.body = reuslt;
  }
}

module.exports = UserController;
