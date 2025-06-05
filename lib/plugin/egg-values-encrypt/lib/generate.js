'use strcit';
const NodeRSA = require('node-rsa');
const fs = require('fs');
const config = require('./config');

function generate() {
  const { basePath, publicPath, privatePath } = config;

  if (!fs.existsSync(basePath)) { // 指定目录不存在直接生成
    fs.mkdirSync(basePath);
  }

  if (fs.existsSync(publicPath) || fs.existsSync(privatePath)) { // 不覆盖生成 key
    throw new Error('key already exists');
  }
  // 生成密钥对
  const rsa = new NodeRSA({ b: 1024 });
  const publicKey = rsa.exportKey('public');
  const privateKey = rsa.exportKey('private');


  fs.writeFileSync(publicPath, publicKey);
  fs.writeFileSync(privatePath, privateKey);

  console.log('public_key.pem \n', publicKey);
  console.log('private_key.pem \n', privateKey);
}


generate();
