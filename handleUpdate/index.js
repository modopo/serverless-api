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
  let param = event.pathParameters;
  
  const response = { 
    statusCode: null, 
    body: null 
  };

  if (param) {
    const updated = await employeeModel.update({"id": param['id'] }, body);
    response.body = JSON.stringify(updated);
    response.statusCode = 200;
  } else {
    response.body = JSON.stringify('Misisng request id');
    response.statusCode = 500;
  }

  return response;
};