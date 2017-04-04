
const user = 'karolis_test_@gmail.com';
const fname = 'Karolis';
const lname = 'Krulis';
const pword = 'my_password';


const generateEmail = function () {
  var time = new Date().toLocaleTimeString().replace(/[^0-9a-zA-Z]/g, '');
  var email = 'karolis_test' + time + '@gmail.com';
  return email;
}

module.exports = {
  generateEmail,
  user,
  fname,
  lname,
  pword
};