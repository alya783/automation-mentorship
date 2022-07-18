class EditUser {
    
    get username(){
        return $('[name="username"]');
    }

    get dropdownIcon(){
        return $('//li[@class="dropdown icon"]');
    }

    get logout(){
        return $('//a[@href="/logout"]');
    }

    async exitPage () {
        await this.dropdownIcon.click();
        await this.logout.click();
    }

}

module.exports = new EditUser();