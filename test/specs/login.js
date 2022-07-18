require('dotenv').config();
const ModalWindow = require('../pageobjects/modalWindow');
const EditUser = require('../pageobjects/editUserPO');
const login = process.env.LOGIN;
const password = process.env.PASSWORD;
const invalidLogin = process.env.LOGIN2;
const invalidPass = process.env.PASSWORD2;
const errorMessage = "Email is not registered.";
const userAssertion = 'alya97';

describe('Login into the sysytem', () => {

    before('open site', async function () {
       await ModalWindow.open();
    });

    it('should login with valid credentials', async () => { 
        await ModalWindow.login(`${login}`,`${password}`);
        await expect(EditUser.username).toHaveAttr('value', `${userAssertion}`);
        await EditUser.exitPage();
        await EditUser.dropdownIcon.waitForDisplayed({ reverse: true });
    });

    it('login with invalid credentials', async () => {
        await ModalWindow.login(`${invalidLogin}`, `${password}`); 
        await expect(ModalWindow.alertLoginErr).toHaveText(`${errorMessage}`);
        await ModalWindow.close();
        await ModalWindow.modalWin.waitForDisplayed({ reverse: true });
    });

    it('should failing', async () => {
        await ModalWindow.login(`${login}`,`${invalidPass}`);
        await expect(EditUser.username).toHaveAttr('value', `${userAssertion}`);
    });
});

