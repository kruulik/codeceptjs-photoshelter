Feature('Navigation check');

Scenario('See big yellow button', (I) => {
  I.amOnPage('/');
  I.see('SIGN UP NOW', '.signupCta');
});

Scenario('See main navigation', (I) => {
  I.amOnPage('/');
  //main navigation hidden on smaller screens, hence the initial resize. 
  //login is not part of main nav; selecting parent #HeaderGlobal instead.
  within('//*[@id="HeaderGlobal"]', function () {
    I.see('FEATURES');
    I.see('TEMPLATES');
    I.see('IMAGES');
    I.see('PRICING');
    I.see('MORE');
    I.see('LOGIN');
  });
});