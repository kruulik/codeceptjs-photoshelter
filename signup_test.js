

Feature('Signup');

Scenario('Sign up now', function* (I) {
  I.amOnPage('/');
  
  I.click('.signupCta');
  //hacky way to access dom node
  var form = yield I.grabAttributeFrom('//*[@id="signupModal"]/div/div[2]/div/div/div[2]/iframe', 'src');
  I.amOnPage(form);
  I.fillField('U_FIRST_NAME', 'Ka_test');
  I.fillField('U_LAST_NAME', 'Kr_test');
  let time = new Date().toLocaleTimeString().replace(/[^0-9a-zA-Z]/g, '');
  I.fillField('U_EMAIL', 'Karolis_test' + time +'@gmail.com');
  I.fillField('U_PASSWORD', 'mypassword_test');
  I.click('.next');
  I.wait('2');
  I.selectOption('ULD_REASON', 'Back up my images');
  I.click('#button_submit');
  I.wait('2');
  I.click('body > div.content > div.m11.m11-a > div > a')
  //"Get Started Now" Does not exist any more; it's "Go To My Account". Checking for a call to action 
  

});