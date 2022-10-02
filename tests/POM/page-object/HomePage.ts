import { Locator,expect,Page } from "@playwright/test";

export class HomePage{
    readonly page:Page
    readonly signInButton: Locator
    constructor(page:Page){
        this.page = page
        this.signInButton = page.locator('#signin_button')
    }

    async visitHomepage(page:Page){
        await page.goto('http://zero.webappsecurity.com/index.html')
    }

    async clickOnSignInButton(){
        await this.signInButton.click()
    }
}