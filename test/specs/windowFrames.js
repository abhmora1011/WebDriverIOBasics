describe("Windows and Frames Miscellaneaous",async ()=>{
    it("Parent and Child windows Miscellaneaous", async ()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await $(".blinkingText").click()
        const handles = await browser.getWindowHandles() // 2 windows
        await browser.switchToWindow(handles[1])
        console.log(await $("h2 span").getText())
        console.log(await browser.getTitle())
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle())

    })
})