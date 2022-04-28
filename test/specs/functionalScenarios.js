const expectChai = require('chai').expect

describe("Functional Test Sample",async ()=>{
    xit("Hover and Scrolling",async ()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.maximizeWindow()
        await $("#mousehover").scrollIntoView() // Scroll
        await browser.pause(3000)
        await $("#mousehover").moveTo() // Hover
        await browser.pause(3000)
        await $("=Top").click()
        await browser.pause(3000)
    })

    it("Alert",async ()=>{
        await browser.url("https://only-testing-blog.blogspot.com/")
        await browser.maximizeWindow()
        await $("button").doubleClick()
        console.log(await browser.isAlertOpen())
        expectChai(await browser.isAlertOpen()).to.be.true
        expectChai(await browser.getAlertText()).to.equal("Press 'OK' or 'Cancel' button!")
        await browser.pause(3000)
        await browser.acceptAlert()
        await browser.pause(3000)

    })
})