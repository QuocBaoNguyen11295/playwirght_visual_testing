import {Page, Locator, expect} from '@playwright/test'

export class LoginPage{
    readonly page:Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly signInButton: Locator
    readonly errorMessage: Locator
    readonly loginForm: Locator
    constructor(page:Page){
        this.page = page
        this.usernameInput = page.locator('#user_login')
        this.passwordInput = page.locator('#user_password')
        this.signInButton = page.locator('input[value="Sign in"]')
        this.errorMessage = page.locator('.alert-error')
        this.loginForm = page.locator('#login_form')
    }

    async loginToTheApp(username:string,password:string){
        await this.usernameInput.type(username)
        await this.passwordInput.type(password)
        await this.signInButton.click()
    }

    async loginUnsuccessfully(){
        await expect(this.errorMessage).toBeVisible()
        await expect(this.errorMessage).toContainText('Login and/or password are wrong.')
    }

    async loginSuccessfully(){
        await expect(this.errorMessage).not.toBeVisible()
    }

    async takeSnapshotLoginForm(){
        await expect(this.loginForm.screenshot()).toMatchSnapshot('login-form.png')
    }

    async takeSnapshotErrorMessage(){
        await expect(this.errorMessage.screenshot()).toMatchSnapshot('error-message.png')
    }
}