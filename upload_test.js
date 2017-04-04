
Feature('Upload');

Scenario('test something', (I) => {

  I.amOnPage('http://www.photoshelter.com/mem/home/');
  I.fillField('U_EMAIL', 'Kemail_test2@gmail.com');
  I.fillField('U_PASSWORD', 'mypassword_test');
  I.click('sign in');
  I.wait('5');
  I.click('//*[@id="navbar"]/ul[1]/li[3]');
  //xpath for upload button is different on premium and trial user profiles
  I.wait('1');
  I.click('//*[@id="navbar"]/ul[1]/li[3]/ul/li[2]/a');
  I.wait('1');
  within('//*[@id="Dialog_ClcGal_Create"]', function(){
    I.fillField('NAME', new Date().toLocaleDateString('en-US'));
    I.pressKey('Enter');
  });
  I.attachFile('//*[@id="ubFile"]/div/input','image/Karolis.gif')
});
