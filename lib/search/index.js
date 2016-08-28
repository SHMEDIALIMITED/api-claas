const tv4 = require('tv4');
const SEARCH_SCHEMA = require('./search.schema.json');

module.exports = (event, context) => {

  console.log('\n\nEvent', event);
  console.log('Context', context, '\n\n');

  if(!tv4.validate(event.body, SEARCH_SCHEMA)) {
    console.log('Payload invalid:', tv4.error.message, tv4.error.params);
    return context.fail(JSON.stringify({
      status: 400,
      message: tv4.error.message,
      errors: tv4.error.params
    }));
  }

  return context.succeed({hello:'world!'});
}
