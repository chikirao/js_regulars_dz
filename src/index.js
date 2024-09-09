import Validator from './js/Validator';

const validator = new Validator();

const testUsernames = ['John_Doe', 'Jack_123', '123Jack', 'Jack123', 'Jack_12345', '-Jack'];

testUsernames.forEach((username) => {
  console.log(`Username: ${username}, Valid: ${validator.validateUsername(username)}`);
});
