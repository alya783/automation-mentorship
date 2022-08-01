const Materials = require('../pageobjects/angularPO');

describe('Take action', () => {
    before('open site', async function () {
        await browser.setWindowSize(1920, 1080);
        await browser.url(`${browser.config.baseUrl}`);
    });

    it('do dropdown', async function () {
        await Materials.form.scrollIntoView();
        await Materials.form.click();
        await expect(browser).toHaveTitle('Form field | Angular Material');
        await $('//div[@material-docs-example="form-field-overview"]').scrollIntoView();
        await Materials.firstDropWindow.click();
        await Materials.optionsList.waitForDisplayed({ timeout: 3000 });
        await Materials.firstOpt.click();
        //await $('//div[@role="listbox"]').selectByVisibleText('First option'); // this method doesn't work, options is not found
        await expect(Materials.firstOptText).toHaveText('First option');
    });

    it('check hover text', async function () {
        await Materials.badgePage.click();
        await expect(browser).toHaveTitle('Badge | Angular Material');
        await Materials.copyBtn.moveTo();
        await Materials.tooltip.waitForExist();
        await expect(Materials.tooltip).toHaveText('Copy link to example');  
    });

    it('check drag and drop', async function () {
        await Materials.linkCDK.click();
        await Materials.dragDrop.click();
        await expect(browser).toHaveTitle('Drag and Drop | Angular Material');
        await Materials.exampleWindow.waitForDisplayed({ timeout: 3000 });
        const source = await Materials.dragObj;
        await source.dragAndDrop({x: 300, y: 0}, 10); 
    });
});