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
  let responseBody = null;

  if (param) {
    responseBody = await employeeModel.query('id').eq(param['id']).exec();
  } else {
    responseBody = await employeeModel.scan().exec();
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  };

  return response;
}