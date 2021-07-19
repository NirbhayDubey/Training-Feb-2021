interface IItems
{
    ItemID: number;
    ItemName: string;
    ItemQuantity: number;
    ItemPrice: number;
}

class Purchases implements IItems
{
    ItemID: number;
    ItemName: string;
    ItemQuantity: number;
    ItemPrice: number;
    constructor(ItemID : number, ItemName : string, ItemQuantity : number, ItemPrice : number)
    {
        this.ItemID = ItemID;
        this.ItemName = ItemName;
        this.ItemQuantity = ItemQuantity;
        this.ItemPrice = ItemPrice;
    }
}

class Inventories implements IItems , Purchases , Orders
{
     ItemID: number;
    ItemName: string;
    ItemQuantity: number;
    ItemPrice: number;
    constructor(ItemID : number, ItemName : string, ItemQuantity : number, ItemPrice : number)
    {
        this.ItemID = ItemID;
        this.ItemName = ItemName;
        this.ItemQuantity = ItemQuantity;
        this.ItemPrice = ItemPrice;
    }
}

class Orders implements IItems
{
     ItemID: number;
    ItemName: string;
    ItemQuantity: number;
    ItemPrice: number;
    constructor(ItemID : number, ItemName : string, ItemQuantity : number, ItemPrice : number)
    {
        this.ItemID = ItemID;
        this.ItemName = ItemName;
        this.ItemQuantity = ItemQuantity;
        this.ItemPrice = ItemPrice;
    }
}

var purchase = [new Purchases(100,"Book",5,20), new Purchases(101,"Pen",10,5)];
var order = [new Orders(100,"Book",5,20), new Orders(101,"Pen",10,5)];
var Inventory12;
var reorder;
var item12: Purchases[]=[];
var price;
var qty;
var id;
var iname;
console.log("Items purchased is:");
console.log(purchase);
for(var i of purchase)
{
    for(var j of order)
    {
        if(i.ItemID == j.ItemID)
        {
            Inventory12 = {"ItemID" : i.ItemID, "ItemName" : i.ItemName, "ItemQuantity" : j.ItemQuantity-i.ItemQuantity,"ItemPrice" : i.ItemPrice};
            item12.push(Inventory12);
            price = Inventory12.ItemPrice;
            qty = Inventory12.ItemQuantity;
            id = Inventory12.ItemID;
            iname = Inventory12.ItemName;
        }
    }

    if(qty<5)
    {
        reorder = [new Orders(id,iname,qty+5,price)];
        console.log("Items Ordered sucessfully");
        console.log(reorder);
    }
}
console.log("Items in inventory is:");
console.log(item12);