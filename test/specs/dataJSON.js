const ModalWindow = require('../pageobjects/modalWindow');
const query = 'https://srv.buysellads.com/ads/CEAI65QN.json?segment=placement:stocksnapio';

describe('Get information', () => {
    before(async () => {
        await browser.deleteCookies();
    });

    it('get JSON responce', async function () {
        const getRequest = await browser.mock(query, { method : 'get' });
        await ModalWindow.open();
        const data = getRequest.calls;
        const bodyResponse = data[0].body;
        console.log(bodyResponse);
    });
});

// URL Firefox the same https://srv.buysellads.com/ads/CEAI65QN.json?segment=placement:stocksnapio , but it doesn't work