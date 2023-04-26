const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'role': String,
  'employed': Boolean
})

const employeeModel = dynamoose.model('Employee', schema);