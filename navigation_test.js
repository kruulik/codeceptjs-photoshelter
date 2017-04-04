Feature('Navigation check');

Scenario('See big yellow button', (I) => {
  I.amOnPage('/');
  I.see('SIGN UP NOW', '.signupCta');
});

Scenario('See main navigation', (I) => {
  I.amOnPage('/');
  within('//*[@id="HeaderGlobal"]', function () {
    I.see('FEATURES');
    I.see('TEMPLATES');
    I.see('IMAGES');
    I.see('PRICING');
    I.see('MORE');
    I.see('LOGIN');
  });
});