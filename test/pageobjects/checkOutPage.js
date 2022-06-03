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
}

module.exports = new CheckOutPage()