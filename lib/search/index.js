const tv4 = require('tv4');
const SCHEMA = require('./schema.json');

module.exports = (event, context) => {

	console.log('\n\n-------------------------')
	console.log('Event', event);
	console.log('Context', context);
	console.log('-------------------------\n\n')



	if(!tv4.validate(event.body, SCHEMA)) {
	  console.log('Payload invalid:', tv4.error.message, tv4.error.params);
    return context.fail({
      status: 400,
      message: error.message,
      errors: error.params
    });
	}

  return context.succeed({hello:'world!'});
}
