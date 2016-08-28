const tv4 = require('tv4');
const SEARCH_SCHEMA = require('./search.schema.json');

const log = () => {

}

module.exports = (event, context) => {

  log('\n\nEvent', event);
  log('Context', context, '\n\n');

  if(!tv4.validate(event.body, SEARCH_SCHEMA)) {
    log('Payload invalid:', tv4.error.message, tv4.error.params);
    return context.fail(JSON.stringify({
      status: 400,
      message: tv4.error.message,
      errors: tv4.error.params
    }));
  }

  return context.succeed({hello:'world!'});
}
