Feature('Signup');

Scenario('Sign up now', (I) => {
  I.amOnPage('/');
  I.click('.signupCta');
  within('//div[@id="signupModal"]/div/div[2]/div/div/div[2]/iframe', function () {
    I.fillField('U_FIRST_NAME', 'Ktest_first');
    I.fillField('U_LAST_NAME', 'Ktest_last');
    I.fillField('U_EMAIL', 'Kemail_test@gmail.com');
    I.fillField('U_PASSWORD', 'mypassword_test');
    I.click('.next');
    I.selectOption('ULD_REASON', 'I came to Photoshelter to:');
    I.click('#button_submit');
  });


});