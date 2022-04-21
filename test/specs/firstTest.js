// Test Suite Level declare a describe which a mocha script
// First argument is the title of the suite, the second is the test cases in a function
// Please see jsconfig.json file for intellisense feature
// give async keyword for the script know that it is an asynchromous and need to use the await keyword to be in sync*
describe('ECommere Application', async () => {

    // test case name in the first arg
    // give async keyword for the script know that it is an asynchromous and need to use the await keyword to be in sync*
    it('Login Fail Page',async () => {
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

        await browser.pause(3000) // is like Thread.sleep in java to pause the execution

        await $("input[name='username']").setValue('Hello') // override the existing content

        // to run in terminal type npx wdio run ./wdio.conf.js

        // npx is a shortcut to find the wdio file to run the script
    })

}) 

