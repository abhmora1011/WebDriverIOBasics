class LoginPage
{

    get username() // Getter method
    {
        return $("input[name='username']")
    }

    get password()
    {
        return $("//input[@type='password']")
    }

    get signInBtn()
    {
        return $("#signInBtn")
    }

    async Login(username, password)
    {
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.signInBtn.click()
    }
}

// Export should be in the last line of the code
module.exports = new LoginPage() // to export the class and can be use to other class