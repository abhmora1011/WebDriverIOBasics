class LandingPage
{
    get checkOutLink()
    {
        return $("*=Checkout")
    }

    get cardsList()
    {
        return $$("div[class='card h-100']")
    }

    get footerBtn()
    {
        return $(".card-footer button")
    }

    async getItem()
    {      
        const products = ['iphone X','Blackberry']
        await this.checkOutLink.waitForExist()

        for(let i=0; i < await this.cardsList.length; i++){
            const card = await this.cardsList[i].$("div h4 a")
            console.log(await card.getText())
            if(products.includes(await card.getText())){
                await this.cardsList[i].$(".card-footer button").click()
            }
        }

    }

    
}

module.exports = new LandingPage()