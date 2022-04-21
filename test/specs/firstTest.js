// Test Suite Level declare a describe which a mocha script
// First argument is the title of the suite, the second is the test cases in a function
// Please see jsconfig.json file for intellisense feature
// give async keyword for the script know that it is an asynchromous and need to use the await keyword to be in sync*
describe('ECommere Application', async () => {

    // test case name in the first arg
    // give async keyword for the script know that it is an asynchromous and need to use the await keyword to be in sync*
    // adding x infront of it makes the test case disable
    xit('Login Fail Page',async () => {
        //webdriverio is Async
        await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
        // (promise) resolved, pending, rejected
        // await will make your execution synchonous 
        console.log(await browser.getTitle())

        // Assestion added
        await expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy")

        // CSS Selector
        /*
            id - #id - #username
            class name - .className
            tagname[attribute='value']
        */
        //const elem = await $('#username')
        await $("input[name='username']").setValue('Hello') // input value

        // await browser.pause(3000) // is like Thread.sleep in java to pause the execution

        await $("input[name='username']").setValue('Hi') // override the existing content

        await $("//input[@type='password']").setValue("sample")

        // const elemPass = await $("(//span[@class='checkmark'])[2]")
        // elemPass.click()

        // await $("#okayBtn").click()

        await $("#signInBtn").click()
        
        // await browser.pause(3000)

        await console.log(await $(".alert-danger").getText()) // Grab the text

        // EXPLICIT WAIT
        // browser.waitUntil(condition, { timeout, timeoutMsg, interval })
        await browser.waitUntil(
            async ()=> await $("#signInBtn").getAttribute('value') === 'Sign In', // condition ( First Argument)
            {
                // Second Argument
                timeout: 5000, 
                timeoutMsg: 'Error message is not showing up' 
            }
        )

        await console.log(await $(".alert-danger").getText()) // Grab the text

        // to run in terminal type npx wdio run ./wdio.conf.js

        // npx is a shortcut to find the wdio file to run the script

        // ASSERTION
        await expect($("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning")
    })

    it('Login Success Page', async ()=> {
        await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
        await browser.maximizeWindow()
        await $("input[name='username']").setValue('rahulshettyacademy') 
        await $("//input[@type='password']").setValue("learning")
        await $("#signInBtn").click()
        await browser.pause(2000)
        await console.log(await browser.getUrl())

        // await browser.waitUntil(
        //     async ()=> await $(".btn-primary").getElementText() === ' Checkout ( 0 )', // condition ( First Argument)
        //     {
        //         // Second Argument
        //         timeout: 5000, 
        //         timeoutMsg: 'Error message is not showing up' 
        //     }
        // )

        await $("//a[contains(text(),'ProtoCommerce Home')]").waitForExist() // To check if the element is currently exist
        await expect(browser).toHaveUrlContaining("shop") // Assertion
        await expect(browser).toHaveTitle("ProtoCommerce") // Assertion
    })

}) 

