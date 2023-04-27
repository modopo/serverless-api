const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'role': String,
  'employed': Boolean
})

const employeeModel = dynamoose.model('Employee', schema);

exports.handler = async (event) => {
  let param = event.pathParameters;

  const response = {
    statusCode: 200,
    body: null
  };

  if (param) {
    let deleted = await employeeModel.delete(param['id']);
    response.body = JSON.stringify(deleted);
    response.statusCode = 200;
  } else {
    response.body = JSON.stringify("Not available");
    response.statusCode = 500;
  }

  return response;
}