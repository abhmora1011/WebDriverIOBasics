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

        // to run in terminal type npx wdio run ./wdio.conf.js

        // npx is a shortcut to find the wdio file to run the script
    })

}) 

