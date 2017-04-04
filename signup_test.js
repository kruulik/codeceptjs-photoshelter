const helpers = require('./helpers.js');

Feature('Signup');

Scenario('Sign up now', function* (I) {
  I.amOnPage('/');
  I.click('.signupCta');
  I.wait('1');
  //hacky way to access dom node
  var form = yield I.grabAttributeFrom('//*[@id="signupModal"]/div/div[2]/div/div/div[2]/iframe', 'src');
  I.wait('1');
  I.amOnPage(form);
  I.wait('1');
  I.fillField('U_FIRST_NAME', helpers.fname);
  I.fillField('U_LAST_NAME', helpers.lname);
  I.fillField('U_EMAIL', helpers.generateEmail());
  I.fillField('U_PASSWORD', helpers.pword);
  I.click('.next');
  I.wait('2');
  I.selectOption('ULD_REASON', 'Back up my images');
  I.click('#button_submit');
  I.wait('2');
  //"Get Started Now" has been replaced with "Go To My Account". Checking for a call to link instead. 
  I.click('body > div.content > div.m11.m11-a > div > a')
});