const loginPage = require('../pageobjects/loginPage')
const landingPage = require('../pageobjects/landingPage')
const checkOutPage = require('../pageobjects/checkOutPage')
const expectChai = require('chai').expect

describe('ECommere Application', async () => {

    it('End to End', async ()=> {
        const products = ['iphone X','Blackberry']
        await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
        await browser.maximizeWindow()
        await loginPage.Login('rahulshettyacademy','learning')
        await browser.pause(3000)
        await landingPage.getItem()
        await landingPage.checkOutLink.click()
        await browser.pause(2000)

        // string > integer
        const productPrices = await checkOutPage.productPrices
        // productPrices will be updated
        
        const sumOfProducts = (await Promise.all(await productPrices.map(async (productPrice)=> parseInt((await productPrice.getText()).split(".")[1].trim())))).reduce((acc,price)=>acc+price,0) // 0 is the initial value of acc

        //await console.log(sumOfProducts)

        const totalValue = await checkOutPage.totalValue.getText()
        const totalIntValue = parseInt(await totalValue.split(".")[1].trim())

        await expectChai(sumOfProducts).to.eql(totalIntValue)
        await checkOutPage.btnSuccess.click()
        await $('#country').setValue("ind")
        await $(".lds-ellipsis").waitForExist({reverse:true}) // wait until disappear
        await $("=India").click()
        await $("input[type='submit']").click()
        await expect($(".alert-success")).toHaveTextContaining("Success")
    })

})