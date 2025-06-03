'use strict';

const Controller = require('egg').Controller;
const R = require('ramda');

class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    const reuslt = await service.user.index();
    ctx.body = reuslt;
  }

  /**
   * 创建用户
   */
  async create() {
    const { ctx, service } = this;
    const body = ctx.request.body;
    ctx.validate({
      email: {
        type: 'email',
        required: true,
        allowEmpty: false,
      },
      nickname: {
        type: 'string',
        required: false,
        min: 3,
        max: 15,
        allowEmpty: false,
      },
      password: {
        type: 'string',
        required: false,
        min: 6,
        max: 20,
        allowEmpty: false,
      },
    }, body);
    const params = R.pick([ 'email', 'nickname', 'password' ], body);
    const reuslt = await service.user.create(params);
    ctx.success(reuslt);
  }
}

module.exports = UserController;
