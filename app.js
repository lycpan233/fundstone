'use stirct';

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async configWillLoad() { // 文件配置加载完成之前
  }


  async willReady() { // 插件启动完毕
  }
}

module.exports = AppBootHook;
