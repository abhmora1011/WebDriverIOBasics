const expectChai = require('chai').expect

describe('UI Controls Test Suite',async ()=>{
    xit('UI Controls', async ()=>{
        // Dati no need na yung async at await automatic na sya
        // Node.js is updated kaya need na ilagay yung async and await
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

    xit("Dynamic Controls", async ()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.maximizeWindow()
        const drop = await $("#autocomplete")
        drop.setValue("ind")
        await browser.pause(3000)
        const items = await $$(".ui-menu-item div")
        
        for(var i = 0; i< await items.length;i++ ){
            //console.log(await items[i].getText())
            if(await items[i].getText() === "India"){
                await items[i].click()
                await browser.pause(3000)
            }
        }
        await browser.pause(3000)
        
    })
    it("Checkbox", async ()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.maximizeWindow()
        const checkbox = $$("input[type='checkbox']")
        await checkbox[1].click()
        await browser.pause(3000)
        console.log(await checkbox[1].isSelected())
        console.log(await checkbox[2].isSelected())
        // Screenshot
        await browser.saveScreenshot("screenshot.png")
    })
})