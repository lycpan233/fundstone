'use strict';
const NodeRSA = require('node-rsa');
const fs = require('fs');
const path = require('path');

function encrypt(str) {
  const basePath = path.join(__dirname, '../', '../', 'config', 'pem');
  const publicPath = path.join(__dirname, '../', '../', 'config', 'pem', 'public_key.pem');
  const privatePath = path.join(__dirname, '../', '../', 'config', 'pem', 'private_key.pem');

  if (!fs.existsSync(basePath) || !fs.existsSync(publicPath) || !fs.existsSync(privatePath)) {
    throw new Error('key not exists');
  }
  const publicKey = fs.readFileSync(publicPath, 'utf8');
  const privateKey = fs.readFileSync(privatePath, 'utf8');
  console.log('publicKey: ', publicKey);
  console.log('privateKey: ', privateKey);

  const rsa = new NodeRSA(privateKey);
  rsa.importKey(publicKey);
  const encryptData = rsa.encrypt(str, 'base64');
  const data = rsa.decrypt(encryptData, 'utf8');
  console.log('encryptData: ', { str, data, encryptData });

  if (data !== str) {
    throw new Error('encrypt error');
  }

  return encryptData;
}

encrypt('');
