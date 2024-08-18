const {expect} = require ('@playwright/test')
class LoginPage{
    constructor(page)
    {
        this.page = page
        this.url = 'http://localhost:3000'
        this.headerLocator = page.locator("//h2[.='Login']")
        this.usernameLocator = "//input[@id='username']"
        this.passwordLocator = "//input[@id='password']"
        this.loginButtonLocator = "//button[.='Login']"
        this.messageLocator = "//div[@id='message']"
        this.loginSuccessLocator = page.locator("//div[.='Вы авторизовались']")
        this.logoutButton = "//button[@id='logoutButton']"
        this.failedLoginMessage = page.locator("//div[.='User not found']")
        this.failedPasswordMessage = page.locator("//div[.='Incorrect password']")
        this.fakeurl = 'http://localhost:3000/welcome'
    }

    async gotoLoginPage()
    {
        await this.page.goto(this.url)
        await expect(this.headerLocator).toBeVisible()
    }

    async eneterUsername(strUsername)
    {
        await this.page.fill(this.usernameLocator,strUsername)
        
    }

    async eneterPassword(strPassword)
    {
        await this.page.fill(this.passwordLocator,strPassword)
    }

    async clickLogin()
    {
        await this.page.click(this.loginButtonLocator)
    }
    
    async checkFailedLogin()
    {
        await expect(this.failedLoginMessage).toBeVisible()
    }

    async checkSuccessLogin()
    {
        await expect(this.loginSuccessLocator).toBeVisible()
    }
    
    async clickLogout()
    {
        await this.page.click(this.logoutButton)
        await expect(this.headerLocator).toBeVisible()
    }

    async checkFailedPassword()
    {
        await expect(this.failedPasswordMessage).toBeVisible()
    }

    async gotoWelcomePage()
    {
        await this.page.goto(this.fakeurl)
        await expect(this.headerLocator).toBeVisible()
    }
}
export default LoginPage