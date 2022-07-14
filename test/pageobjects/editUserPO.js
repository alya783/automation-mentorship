class EditUser {
    
    async exitPage () {
        await $('//li[@class="dropdown icon"]').click();
        await $('//a[@href="/logout"]').click();
    }

}

module.exports = new EditUser();