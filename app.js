'use stirct';
const NodeRSA = require('node-rsa');
const fs = require('fs');
const path = require('path');

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async configWillLoad() { // 文件配置加载完成之前
    const { config } = this.app;

    // 解密字段
    if (config.secretKeys && config.secretKeys.length) {
      try {
        const praivatePath = path.join('./config', 'pem', 'private_key.pem');
        const privateKey = fs.readFileSync(praivatePath, 'utf8');
        if (!privateKey) throw new Error('private_key.pem is not exists');
        const rsa = new NodeRSA(privateKey);

        for (const el of config.secretKeys) {
          const paths = el.split('.');
          let dummyNode = config;
          for (let i = 0; i < paths.length - 1; i++) {
            dummyNode = dummyNode[paths[i]];
            if (!dummyNode) throw new Error('config is not exists');
          }
          const lastKey = paths[paths.length - 1];
          if (!dummyNode[lastKey]) throw new Error('config is not exists');
          const cryptograph = dummyNode[lastKey];
          dummyNode[lastKey] = rsa.decrypt(cryptograph, 'utf8');
        }
      } catch (error) {
        throw new Error('decryption failure ' + error.message);
      }
    }


  }

}

module.exports = AppBootHook;
