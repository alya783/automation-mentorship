const ModalWindow = require('../pageobjects/modalWindow');
const EditUser = require('../pageobjects/editUserPO');

describe('Login into the sysytem', () => {

    before('open site', async function () {
       await ModalWindow.open('https://stocksnap.io/');
    });

    it('should login with valid credentials', async () => { 
        await ModalWindow.login('astrashevichute@gmail.com', '2022PolandAQA');
        await expect($('[name="username"]')).toHaveAttr('value', 'alya97');
        await EditUser.exitPage();
    });

    it('login with invalid credentials', async () => {
        await ModalWindow.login('astra@gmail.com', '2022PolandAQA'); 
        await expect($('//div[@class="alert alert-danger error-msg"]')).toHaveText('Email is not registered.');
        await $('//button[@class="close modal-close"]').click();
    });

    it('should failing', async () => {
        await ModalWindow.login('astrashevichute@gmail.com', 'PolandAQA');
        await expect($('[name="username"]')).toHaveAttr('value', 'alya97');
    });
});

