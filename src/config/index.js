export const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://production.com'
  : ''
  // http://localhost:3000 如果再main.js中代理已经开启则是空字符串
