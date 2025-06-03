// app/controller/context.js
const statusCodeMap = require('../status-code/index');

module.exports = {
  /**
   * 格式化返回值
   * @param {object} data - 返回值
   */
  success(data) {
    this.status = 200;
    this.body = {
      code: 200,
      msg: 'success',
      data: data || {},
    };
  },

  /**
   * 返回错误信息
   * @param {string} code - 错误代码
   */
  fail(code) {
    if (statusCodeMap[code]) {
      const error = new Error(statusCodeMap[code][1]);
      error.code = statusCodeMap[code][0];
      throw error;
    } else {
      throw new Error('未知错误');
    }
  },

  /**
   * 格式化错误类
   * @param {object} error - 错误信息
   */
  handleError(error) {
    if (error.constructor.name === 'UnprocessableEntityError') {
      error.message = error.errors;
    }
  },
};
