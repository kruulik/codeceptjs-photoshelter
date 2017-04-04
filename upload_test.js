const helpers = require('./helpers.js');

Feature('Upload');

Scenario('Upload an image', (I) => {
  I.amOnPage('/mem/home/');
  //get dyanic account info from page object
  I.fillField('U_EMAIL', helpers.user);
  I.fillField('U_PASSWORD', helpers.pword);
  I.click('sign in');
  I.wait('3');
  //large page, needs extra time to load. Will fail with <2s
  I.click('//*[@id="navbar"]/ul[1]/li[3]');
  //xpath for upload button is different on premium and trial user profiles
  I.wait('1');
  I.click('//*[@id="navbar"]/ul[1]/li[3]/ul/li[2]/a');
  I.wait('1');
  within('//*[@id="Dialog_ClcGal_Create"]', function(){
    I.fillField('NAME', new Date().toLocaleDateString('en-US'));
    I.pressKey('Enter');
  });
  I.attachFile('#ubFile > div > input[type="file"]','image/Karolis.gif');
  //Only CSS locator allowed for attachFile in Nightmare helper
  I.wait('5');
  I.see('Upload completed')
});
