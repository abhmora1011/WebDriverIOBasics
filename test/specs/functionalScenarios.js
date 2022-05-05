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

    xit("Alert",async ()=>{
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

    it("Sort",async ()=>{
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await browser.maximizeWindow()
        await $("tr th:nth-child(1)").click()
        // Retrieve the list of veggies in an array
        // sort the array A and create array B
        // compare A and array B (Fail)
        const veggiesLocators = await $$("tr td:nth-child(1)")
        const originalVeggiesNames = await veggiesLocators.map(async veggie=>await veggie.getText())
        console.log(originalVeggiesNames)
        veggies = await originalVeggiesNames.slice()
        // Array are pass by reference
        sortedVeggies = await veggies.sort()
        console.log(sortedVeggies)
        expectChai(originalVeggiesNames).to.eql(sortedVeggies)
    })
})