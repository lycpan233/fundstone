// app/controller/helper.js
const { v4: uuidv4 } = require('uuid');

module.exports = {
  generateUuid() {
    return uuidv4().replace(/-/g, '');
  },
};
