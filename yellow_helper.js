'use strict';

class Yellow extends Helper {

  seeYellow(locator, color) {
    let assert = require('chai-jquery').assert;

    let browser = this.helpers['Nightmare'].browser;

    return this.helpers['Nightmare']._locate(locator).then(function () {
      return browser.expect()

      expect(el.css('display')).to.eq('block');
    })
  }



  seeAttributeContains(locator, attribute, expectedValue) {
    // let's use chai assertion library
    let assert = require('chai').assert;
    // get nightmare instance
    let browser = this.helpers['Nightmare'].browser;
    // find an element by CSS or XPath:
    return this.helpers['Nightmare']._locate(locator).then(function (els) {
      // we received an array with IDs of matched elements
      // now let's execute client-side script to get attribute for the first element
      return browser.evaluate(function (el, attribute) {
        // this is executed inside a web page!
        return codeceptjs.fetchElement(el).getAttribute(attribute);
      }, els[0], attribute); // function + its params
    }).then(function (attributeValue) {
      // get attribute value and back to server side
      // execute an assertion
      assert.include(attributeValue, expectedValue);
    });
  }

}

module.exports = Yellow;