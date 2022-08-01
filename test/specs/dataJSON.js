const ModalWindow = require('../pageobjects/modalWindow');
const query = 'https://srv.buysellads.com/ads/CEAI65QN.json?segment=placement:stocksnapio';

describe('Get information', () => {
    before(async () => {
        await browser.deleteCookies();
    });

    it('get JSON response', async function () {
        const getRequest = await browser.mock(query, { method : 'get' });
        await ModalWindow.open();
        const data = getRequest.calls;
        const bodyResponse = data[0].body;
        console.log(bodyResponse);
    });
});

describe('Catch network requests', () => {
    before(async () => {
        await browser.deleteCookies();
    });

    it('should show json responses', async function(){
        browser.cdp('Network', 'enable');
        browser.on('Network.responseReceived', (params) => {
            if(params.response.mimeType === "application/json"){
                console.log(`Loaded ${params.response.url}`);   
                browser.cdp('Network', 'getResponseBody', {
                    requestId : params.requestId
                }).then((res) => {
                    console.log(res);
                });
            }     
        });
        await ModalWindow.open();
    });
}); 
