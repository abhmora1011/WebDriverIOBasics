describe('UI Controls Test Suite',async ()=>{
    it('UI Controls', async ()=>{
        await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
        await browser.maximizeWindow()
        await $("input[name='username']").setValue('rahulshettyacademy') 
        const password = await $("//input[@type='password']") 
        password.setValue("learning")
        const radioButtons = await $$(".checkmark") // use $$ to grab the matching elements
        radioButtons[1].click()
    })
})