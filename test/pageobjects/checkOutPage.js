class CheckOutPage
{
    get productPrices()
    {
        return $$("//tr/td[4]/strong")

    }

    get totalValue()
    {
        return $("h3 strong")
    }

    get btnSuccess()
    {
        return $('.btn-success')
    }

    get sumOfProducts(){
        return (await Promise.all(await this.productPrices.map(async (productPrice)=> parseInt((await productPrice.getText()).split(".")[1].trim())))).reduce((acc,price)=>acc+price,0) // 0 is the initial value of acc
    }
}

module.exports = new CheckOutPage()