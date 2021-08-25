import Cart from './Cart';
import Item from './Item';

describe('Cart', () =>
{
    let cart: Cart;

    beforeEach(() =>
    {
        cart = new Cart();
    })

    // #1 Done
    test('should initialize as empty', () =>
    {
        expect(cart.items).toEqual([]);
        expect(cart.totalPrice).toEqual(0);
        expect(cart.isEmpty()).toBeTruthy();
    })

    // #2
    test('should add item to cart', () =>
    {
        let item = new Item("milk", 2, false);
        cart.addItem(item,1);
        expect(cart.items.length).toEqual(1);
    })

    test('total price should reflect sum of item values', () =>
    {
        let item = new Item("milk", 2, false);
        cart.addItem(item,1);
        expect(cart.totalPrice).toEqual(2);
    })

    // #3
    test('print all items with price and quantity', () =>
    {
        let item = new Item("milk", 2, false);
        cart.addItem(item,1);
        item = new Item("cabbage", 3, false);
        cart.addItem(item,1);
        item = new Item("cereal", 1.5, false);
        cart.addItem(item,1);
        item = new Item("milk", 2, false);
        cart.addItem(item,1);
        
        let list = cart.getList();
        expect(list).toEqual("milk(2): $4, cabbage(1): $3, cereal(1): $1.5");
    })

    // #4 
    test('print updated list', () =>
    {
        let item = new Item("milk", 2, false);
        cart.addItem(item,1);
        item = new Item("egg", 2, false);
        cart.addItem(item,1);
      
        
        let  list = cart.getList();
        expect(list).toEqual("milk(1): $2, egg(1): $2");
      
        item = new Item("milk", 2, false);
        cart.addItem(item,1);
      
        
        list = cart.getList();
        expect(list).toEqual("milk(2): $4, egg(1): $2");
    })

    // #5 
    test('should add item to cart', () =>
    {
        let item = new Item("milk", 2, false);
        cart.addItem(item, 1); 
        cart.removeItem(item, 1);
        expect(cart.items.length).toEqual(0);
    })

    // #6
    test('should add 3 item to cart and remove 2', () =>
    {
        let item = new Item("milk", 2, false);
        cart.addItem(item, 3);
        cart.removeItem(item, 2);
        expect(cart.items.length).toEqual(1);

        let list = cart.getList();
        expect(list).toEqual("milk(1): $2");
    })

   
});


