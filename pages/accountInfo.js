
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  }, 
  
  email: 'karolis_test' + Date().toLocaleTimeString().replace(/[^0-9a-zA-Z]/g, '') + '@gmail.com',
  
  uploadDate: new Date().toLocaleDateString('en-US'),
  
  
  
  

  // insert your locators and methods here
}
