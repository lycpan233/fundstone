const path = require('path');

module.exports = {
  basePath: path.join(__dirname, '../', 'config', 'pem'),
  publicPath: path.join(__dirname, '../', 'config', 'pem', 'public_key.pem'),
  privatePath: path.join(__dirname, '../', 'config', 'pem', 'private_key.pem'),
};
