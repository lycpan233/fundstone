const { Controller } = require('egg');
const dayjs = require('dayjs');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello fundstone!';
  }

  async alive() {
    const { ctx, config } = this;
    ctx.body = {
      name: config.name,
      version: config.pkg.version,
      timestamp: dayjs().unix(),
    };
  }
}

module.exports = HomeController;
