class ModalWindow {
    
    get username () {
        return $('[name="email"]');
    }

    get password () {
        return $('[name="password"]');
    }

    get btnLogin () {
        return $('button*=Log in');
    }

    get logLink (){
        return $('a*=Log in');
    }

    get modalWin(){
        return $('.modal-body');
    }

    get alertLoginErr(){
        return $('//div[@class="alert alert-danger error-msg"]');
    }

    get closeModalSign(){
        return $('//button[@class="close modal-close"]');
    }

    async login (username, password) {
        await this.logLink.click();
        await this.modalWin.waitForDisplayed({ timeout: 5000 });
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.btnLogin.click();
    }

    open () {
        return browser.url(`${browser.config.baseUrl}`);
    }

    async close(){
        await this.closeModalSign.click();
    }


}

module.exports = new ModalWindow();
