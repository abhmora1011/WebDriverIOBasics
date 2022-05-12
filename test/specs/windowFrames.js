describe("Windows and Frames Miscellaneaous",async ()=>{
    it("Parent and Child windows Miscellaneaous", async ()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await $(".blinkingText").click()
        const handles = await browser.getWindowHandles() // 2 windows
        await browser.switchToWindow(handles[1]) // Dealing with the browser by application
        console.log(await $("h2 span").getText())
        console.log(await browser.getTitle())
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle())
        await browser.newWindow("https://google.com/")
        console.log(await browser.getTitle())
        await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/") // Browser are open by automation
        await $("#username").setValue("helloIswitchback")
        await browser.pause(3000)
    })
})