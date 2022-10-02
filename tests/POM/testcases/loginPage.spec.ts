import {test} from '@playwright/test'
import { HomePage } from '../page-object/HomePage'
import { LoginPage } from '../page-object/LoginPage'

test.describe.parallel('Login flow',()=>{
    let homepage: HomePage
    let loginPage: LoginPage
    test.beforeEach(async({page})=>{
        homepage = new HomePage(page)
        loginPage = new LoginPage(page)
        await homepage.visitHomepage(page)
        await homepage.clickOnSignInButton()
    })

    test('Login unsuccessfully',async()=>{
        await loginPage.loginToTheApp('username1','password1')
        await loginPage.loginUnsuccessfully()
        await loginPage.takeSnapshotErrorMessage()
    })

    test('Login successfully',async ()=>{
        await loginPage.loginToTheApp('username','password')
        await loginPage.loginSuccessfully()
    })

    test('Login form',async ()=>{
        await loginPage.takeSnapshotLoginForm()
    })
    test.afterEach(async({page})=>{
        await page.close()
    })
})