const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVlMTExY2Y2LTMxY2YtNDIzYy1hZTFjLTdmYzIxYmE1NGFjNS0xNzQ3MTU1OTI5NzYyIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMmNkZDQ4ZjItMDU4ZC00OTEwLTljNmItM2ZjYWZkNjc5N2I4IiwidHlwZSI6InQifQ.GI3NrYQPkel7TaEiAw-pQWq-nDU3L257zUnDJsEifo4';

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
