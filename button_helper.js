
'use strict';


var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

class Button extends Helper {

  
  seeColor() {
   
    let client = this.helpers['WebDriverIO'].browser;
  
    
    return client.getCssProperty(function () {
    var elem = $('.signupCta')
    elem.getCssProperty('background-color')
    console.log(color)
    })
                         
                         
                         
//    return client.getCssProperty(selector,'background-color');
    
  
    
//    return client.getCssProperty(selector,'background-color')
    
  }

}

module.exports = Button;
