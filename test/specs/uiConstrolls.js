const expectChai = require('chai').expect

describe('UI Controls Test Suite',async ()=>{
    it('UI Controls', async ()=>{
        await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
        await browser.maximizeWindow()
        await $("input[name='username']").setValue('rahulshettyacademy') 
        const password = await $("//input[@type='password']") 
        password.setValue("learning")
        const radioButtons = await $$(".customradio") // Use $$ to get the elements
        const userDropdown =  radioButtons[1]
        await userDropdown.$("span").click() 
        await browser.pause(4000)
        const modal = await $(".modal-body")
        await modal.waitForDisplayed()
        await $("#okayBtn").click()
        //await browser.pause(3000)
        console.log(await $("(//label[@class='customradio']/input)[2]").isSelected())
        await $("(//label[@class='customradio']/input)[1]").click()
        await browser.pause(3000)
        await expect(modal).not.toBeDisplayed()
        // STATIC DROPDOWN 
        const dropdown = await $("select.form-control")
        dropdown.selectByAttribute('value','teach')
        await browser.pause(3000)
        dropdown.selectByVisibleText('Consultant')
        await browser.pause(3000)
        await dropdown.selectByIndex(0)
        await browser.pause(3000)
        console.log(await dropdown.getValue())
        
        // Chai Assertions you need to install npm install chai
        // require the chai node module at the top
        expectChai(await dropdown.getValue()).to.equal("stud")

    })
})