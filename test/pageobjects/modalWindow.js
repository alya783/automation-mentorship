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

    async login (username, password) {
        await $('a*=Log in').click();
        await $('.modal-body').waitForDisplayed({ timeout: 5000 });
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.btnLogin.click();
    }

    open (path) {
        return browser.url(`${path}`) //https://www.pexels.com/login/ ;
    }
}

module.exports = new ModalWindow();
