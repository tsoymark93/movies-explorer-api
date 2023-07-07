const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 минута
  max: 100, // максимальное число запросов с одного IP в течение windowMs
  message: 'Превышено количество запросов. Пожалуйста, повторите попытку позже.',
});

module.exports = limiter;
