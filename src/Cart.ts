import Item from "./Item";

export default class Cart
{
    public items: Item[] = [];
    public totalPrice = 0;
   
    constructor()
    {

    }

    public isEmpty()
    {
        return this.items.length === 0;
    }

    public addItem(i: Item, n: number)
    {
        for (let j = 0; j < n; j++){
          this.items.push(i);   
        }
       
        this.totalPrice += i.GetPrice() * n;
    }

    public removeItem(i: Item, n: number)
    {
        for (let j = 0; j < n; j++){
            let foundIndex = -1;
            let index = 0;
            for (const item of this.items)
            {
                let itemName = item.GetName();
    
                if (itemName === i.GetName())
                {
                    foundIndex = index;      
                }
    
                index++
            } 
           
            if (foundIndex !== -1){
                this.items.splice(foundIndex, 1);
                this.totalPrice -= i.GetPrice();
            } 
        }
    

        //this.items.push(i);

        //this.updateTotalPrice();
        
    }

    public getList()
    {
        let list = "";

        let stackedItems: StackedItem[] = [];

        for (const item of this.items)
        {
            let itemName = item.GetName();

            let foundIndex = -1;
            let index = 0;

            for (const stackedItem of stackedItems)
            {
                if (stackedItem.GetName() === itemName)
                {
                    foundIndex = index;
                }

                index++;
            }

            if (foundIndex !== -1)
            {
                stackedItems[foundIndex].count++;
            }
            else
            {
                let newStackedItem = new StackedItem(item.GetName(), item.GetPrice());
                stackedItems.push(newStackedItem);
            }
        }

        let i = 0;

        for (const stackedItem of stackedItems)
        {
            list += `${stackedItem.name}(${stackedItem.count}): $${stackedItem.price * stackedItem.count}`;
            
            if (i < stackedItems.length - 1)
            {
                list += ", ";
            }

            i++;
        }

        //list = "milk(2): $4, cabbage(1): $2, cereal(1): $2";

        return list;
    }

    

    // private updateTotalPrice()
    // {
    //     let result = 0;

    //     for (const item of this.items)
    //     {
    //         result += item.GetPrice();
    //     }

    //     this.totalPrice = result;
    // }
}

class StackedItem
{
    public name: string = "";
    public count: number = 1;
    public price: number = 0;

    constructor(name: string, price: number)
    {
        this.name = name;
        this.price = price;
    }

    public GetName()
    {
        return this.name;
    }
}

