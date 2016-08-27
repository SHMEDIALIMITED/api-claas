module.exports = {
  invalid : [
    { body: {} },
    { body: {
      date : new Date().toString()
    } },
    { body: {
      date : 'hhh'
    } },
    { body: {
      date : true
    } },
    { body: {
      date : 1000
    } },
    { body: {
      date : new Date().toString(),
      group : -1
    } },
    { body: {
      date : new Date().toString(),
      group : 'hhh'
    } },
    { body: {
      date : new Date().toString(),
      group : true
    } },
    { body: {
      date : new Date().toString(),
      group : 1,
      location : {
        lat : 1
      }
    } },
    { body: {
      date : new Date().toString(),
      group : 1,
      location : {
        lat : 'hhh',
        lng : 1
      }
    } }
  ],

  valid : [
    { body: {
      date : new Date().toString(),
      group : 1,
      location : {
        lat : 1.001,
        lng : 1.556
      }
    } },
    { body: {
      date : new Date().toString(),
      group : 50
    } }
  ]
}
