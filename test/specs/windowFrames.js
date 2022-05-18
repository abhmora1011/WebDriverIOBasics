describe("Windows and Frames Miscellaneaous",async ()=>{
    xit("Parent and Child windows Miscellaneaous", async ()=>
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

    it("Frame switch",async ()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.maximizeWindow()
        await $("#mousehover").scrollIntoView()
        console.log(await $$("a").length)
        await browser.switchToFrame(await $("[id='courses-iframe']"))
        console.log(await $("=Courses").getTagName())
        console.log(await $$("a").length)
        await browser.switchToFrame(null) // this will exist the frame and be back to normal
        console.log(await $$("a").length)
    })
})