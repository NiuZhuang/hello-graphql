let express = require('express');
let Schema = require('./src/schema')
let graphqlHTTP = require('express-graphql')

const app = express()
const port = 3000

app.use('/', graphqlHTTP({
  schema: Schema,
  graphiql: true
}));

let server = app.listen(port, function() {
  let addr = server.address();
  let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Listening on ' + bind);
});