Feature('Signup');

Scenario('Sign up now', function* (I) {
  I.amOnPage('/');
  I.click('.signupCta');
  var form = yield I.grabAttributeFrom('//*[@id="signupModal"]/div/div[2]/div/div/div[2]/iframe', 'src');
  I.amOnPage(form);
  I.fillField('U_FIRST_NAME', 'Ktest1');
  I.fillField('U_LAST_NAME', 'Ktest1');
  I.fillField('U_EMAIL', 'Kemail_test1@gmail.com');
  I.fillField('U_PASSWORD', 'mypassword_test');
  I.click('.next');
  I.wait('5');
  I.selectOption('ULD_REASON', 'Back up my images');
  I.click('#button_submit');
  I.wait('5');
  I.click('/html/body/div[1]/div[1]/div/a')

});