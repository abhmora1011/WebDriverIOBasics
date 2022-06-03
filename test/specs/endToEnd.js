const expectChai = require('chai').expect

describe('ECommere Application', async () => {

    it('End to End', async ()=> {
        await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
        await browser.maximizeWindow()
        await $("input[name='username']").setValue('rahulshettyacademy') 
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        await $("#signInBtn").click()
        await browser.pause(2000)
        const link = await $("*=Checkout") // Partial link text
        await link.waitForExist()
        const cards = await $$("div[class='card h-100']")
        for(let i=0;i < await cards.length; i++){
            const card = await  cards[i].$("div h4 a")
            console.log(await card.getText())
            if(products.includes(await card.getText())){
                await cards[i].$(".card-footer button").click()
            }
        }

        await link.click()
        await browser.pause(2000)

        // string > integer
        const productPrices = await $$("//tr/td[4]/strong")

        // productPrices will be updated
        
        const sumOfProducts = (await Promise.all(await productPrices.map(async (productPrice)=> parseInt((await productPrice.getText()).split(".")[1].trim()))))
        .reduce((acc,price)=>acc+price,0) // 0 is the initial value of acc

        await console.log(sumOfProducts)

        const totalValue = await $("h3 strong").getText()
        const totalIntValue = parseInt(await totalValue.split(".")[1].trim())

        await expectChai(sumOfProducts).to.eql(totalIntValue)
        await $('.btn-success').click()
        await $('#country').setValue("ind")
        await $(".lds-ellipsis").waitForExist({reverse:true}) // wait until disappear
        await $("=India").click()
        await $("input[type='submit']").click()
        await expect($(".alert-success")).toHaveTextContaining("Success")
    })

})