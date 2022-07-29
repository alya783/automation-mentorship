const Materials = require('../pageobjects/angularPO');

describe('Take action', () => {
    beforeEach(async () => {
        await browser.deleteCookies();
    
    });
    
    before('open site', async function () {
        await browser.url(`${browser.config.baseUrl}`);
    });

    it('do dropdown', async function () {
        await Materials.form.click();
        await expect(browser).toHaveTitle('Form field | Angular Material');
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
        const tooltip = await Materials.tooltip.waitForExist();
        // after moving mouse on the copy button hover doedn't appear
        sconsole.log(tooltip);
    });

    it('check drag and drop', async function () {
        await Materials.linkCDK.click();
        await Materials.dragDrop.click();
        await expect(browser).toHaveTitle('Drag and Drop | Angular Material');
        await Materials.exampleWindow.waitForDisplayed({ timeout: 3000 });
        const source = await Materials.dragObj;
        await source.dragAndDrop({x: 300, y: 0}, 10); // test pass, element doesn't move
        await browser.pause(3000);
        
        // second way the same result - test pass, element doesn't move; 
        /*await browser.performActions([{ 
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'mouse' },
                actions: [
                    { type: 'pointerMove', duration: 0, origin: source, x: 0, y: 0 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 10 }, // emulate human pause
                    { type: 'pointerMove', duration: 0, origin: source, x: 250, y: 0 }
                ]
        }]);*/
    });  
});