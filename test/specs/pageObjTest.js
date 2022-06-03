
const loginPage = require('../pageobjects/loginPage')

describe('ECommere Application', async () => {

    it('Login Fail Page',async () => {

        await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");

        await browser.maximizeWindow()
 
        console.log(await browser.getTitle())

        await expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy")

        await $("input[name='username']").setValue('Hello') 

        await $("input[name='username']").setValue('Hi')

        await $("//input[@type='password']").setValue("sample")

        await $("#signInBtn").click()

        await console.log(await $(".alert-danger").getText())

        await browser.waitUntil(
            async ()=> await $("#signInBtn").getAttribute('value') === 'Sign In', 
            {
                timeout: 5000, 
                timeoutMsg: 'Error message is not showing up' 
            }
        )

        await console.log(await $(".alert-danger").getText()) 

        await expect($("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning")
    })

    xit('Login Success Page', async ()=> {
        await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
        await browser.maximizeWindow()
        await $("input[name='username']").setValue('rahulshettyacademy') 
        await $("//input[@type='password']").setValue("learning")
        await $("#signInBtn").click()
        await browser.pause(2000)
        await console.log(await browser.getUrl())

        await $("//a[contains(text(),'ProtoCommerce Home')]").waitForExist()
        await expect(browser).toHaveUrlContaining("shop")
        await expect(browser).toHaveTitle("ProtoCommerce") 
    })

}) 

