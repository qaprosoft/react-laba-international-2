// let json = '{"name":"John","age":30}';
// try {
//   let user = JSON.parse(json);
//   console.log(user);
// } catch (error) {
//   console.log(error);
// }

// let user = JSON.parse(json);
// console.log(user);

// let json = '{"name":"John","age":29}';
// try {
//   console.log('try started');
//   let user = JSON.parse(json);

//   if (user.age > 30) {
//     throw new SyntaxError('Age is too high');
//   }
//   console.log(user);
//   console.log('try finished');
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log('Finally');
// }

class ValidationOwnError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationOwnError';
  }
}

function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationOwnError('No field: age');
  }

  if (!user.name) {
    throw new ValidationOwnError('No field: name');
  }
  return user;
}

try {
  let user = readUser('{ "age": 25 }');
} catch (error) {
  if (error instanceof ValidationOwnError) {
    console.log('Invalid data: ' + error.message);
    console.log('Invalid data: ' + error.name);
  } else if (error instanceof SyntaxError) {
    console.log('JSON Syntax Error: ' + error.message);
    console.log('JSON Syntax Error: ' + error.name);
  } else {
    throw error;
  }
}
