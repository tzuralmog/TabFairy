const firefox = require('selenium-webdriver/firefox');
const fs = require('fs');

describe('test google.com', () => {
    const {
        Builder,
        By,
        Key,
        until
    } = require('selenium-webdriver');
    var driver;
    var options = new firefox.Options();
    options.addExtensions("tabfairy.xpi");
    options.setPreference('xpinstall.signatures.required', false);
    //options.setBinary('/usr/local/bin/firefox/firefox');
    beforeEach(() => {
        driver = new Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(options)
            .build();
    });
 
    afterEach(() => {
        driver.quit();
    });
 
    it('should open google search', async () => {
        await driver.get('http://www.google.com');
        driver
            .getTitle()
            .then(title => {
                expect(title).toEqual('Google');
            });
    });
    it('should open a new tab at the tabfairy repository', async () => {
        await driver.switchTo().newWindow('tab');
        await driver.get('https://github.com/tzuralmog/TabFairy');
        await driver.wait(until.titleContains("TabFairy"), 4000);
        driver
            .getTitle()
            .then(title => {
                expect(title).toEqual('GitHub - tzuralmog/TabFairy');
            });
    });
});
