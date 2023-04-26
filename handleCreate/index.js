const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'role': String,
  'employed': Boolean
})

const employeeModel = dynamoose.model('Employee', schema);

exports.handler = async (event) => {

  const body = JSON.parse(event.body);
  
  const response = { 
    statusCode: null, 
    body: null 
  };

  if (body) {
    const newEmployee = await employeeModel.create(body);
    response.body = JSON.stringify(newEmployee);
    response.statusCode = 200;
  } else {
    response.body = JSON.stringify('Misisng request body');
    response.statusCode = 500;
  }

  return response;
};