var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
 
var fbAccount = '';
var fbPassWord = '';

client
    .init()
    .url('https://msft.weigreen.com')
    .click('=登入')
    .setValue('#email',fbAccount)
    .setValue('#pass',fbPassWord)
    .click('#loginbutton')
    .click('.btn.btn-primary')
    .alertAccept()
    .end();