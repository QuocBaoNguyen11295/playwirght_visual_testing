import {test,expect} from '@playwright/test'

test.describe('Visual regression testing example',()=>{
    test('Full page snapshot',async ({page})=>{
        await page.goto('https://www.example.com/')
        expect(await page.screenshot()).toMatchSnapshot('example.png')
    })

    test('Single element snapshot',async ({page})=>{
        await page.goto('https://www.example.com/')
        const header = page.locator('h1')
        expect(await header.screenshot()).toMatchSnapshot('header.png')
    })
})