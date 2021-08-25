export default class Item {
    private name: string;
    private price: number;
    private onSale: boolean;

    constructor(name: string, price: number, onSale: boolean) {
        this.name = name;
        this.price = price;
        this.onSale = onSale;
    }

    public GetPrice()
    {
        return this.price;
    }

    public GetName()
    {
        return this.name;
    }
}

