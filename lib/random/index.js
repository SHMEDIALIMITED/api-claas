
const data = require('../../data.json');
const random = data.random;

module.exports = (event, context) => {
  return context.succeed({
    line : random[Math.floor(Math.random() * random.length)]
  });
}
