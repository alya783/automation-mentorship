const MainPage = require('../pageobjects/mainPO');
const ModalWindow = require('../pageobjects/modalWindow');

describe('Check links', () => {
    before('open site', async function () {
        await ModalWindow.open();
    });
    
    const data = [
        { ind: 0, text: 'business', link: "/search/business"},
        { ind: 1, text: 'travel', link: "/search/travel"},
        { ind: 2, text: 'beach', link: "/search/beach"},
        { ind: 3, text: 'technology', link: "/search/technology"},
        { ind: 4, text: 'people', link: "/search/people"},
        { ind: 5, text: 'summer', link: "/search/summer"},
        { ind: 6, text: 'food', link: "/search/food"},
        { ind: 7, text: 'love', link: "/search/love"},
    ];

    data.forEach(({ ind, text, link }) => {
        it('check link text', async () => {
            let elem = await MainPage.trendingLinks[ind];
            await expect(elem).toHaveText(text);
        });

        it('check link attr', async () => {
            let elem = await MainPage.trendingLinks[ind];
            await expect(elem).toHaveLink(link);
        });

    });
});