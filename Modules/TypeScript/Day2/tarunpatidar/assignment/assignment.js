var Purchases = /** @class */ (function () {
    function Purchases(ItemID, ItemName, ItemQuantity, ItemPrice) {
        this.ItemID = ItemID;
        this.ItemName = ItemName;
        this.ItemQuantity = ItemQuantity;
        this.ItemPrice = ItemPrice;
    }
    return Purchases;
}());
var Inventories = /** @class */ (function () {
    function Inventories(ItemID, ItemName, ItemQuantity, ItemPrice) {
        this.ItemID = ItemID;
        this.ItemName = ItemName;
        this.ItemQuantity = ItemQuantity;
        this.ItemPrice = ItemPrice;
    }
    return Inventories;
}());
var Orders = /** @class */ (function () {
    function Orders(ItemID, ItemName, ItemQuantity, ItemPrice) {
        this.ItemID = ItemID;
        this.ItemName = ItemName;
        this.ItemQuantity = ItemQuantity;
        this.ItemPrice = ItemPrice;
    }
    return Orders;
}());
var purchase = [new Purchases(100, "Book", 5, 20), new Purchases(101, "Pen", 10, 5)];
var order = [new Orders(100, "Book", 5, 20), new Orders(101, "Pen", 10, 5)];
var Inventory12;
var reorder;
var item12 = [];
var price;
var qty;
var id;
var iname;
console.log("Items purchased is:");
console.log(purchase);
for (var _i = 0, purchase_1 = purchase; _i < purchase_1.length; _i++) {
    var i = purchase_1[_i];
    for (var _a = 0, order_1 = order; _a < order_1.length; _a++) {
        var j = order_1[_a];
        if (i.ItemID == j.ItemID) {
            Inventory12 = { "ItemID": i.ItemID, "ItemName": i.ItemName, "ItemQuantity": j.ItemQuantity - i.ItemQuantity, "ItemPrice": i.ItemPrice };
            item12.push(Inventory12);
            price = Inventory12.ItemPrice;
            qty = Inventory12.ItemQuantity;
            id = Inventory12.ItemID;
            iname = Inventory12.ItemName;
        }
    }
    if (qty < 5) {
        reorder = [new Orders(id, iname, qty + 5, price)];
        console.log("Items Ordered sucessfully");
        console.log(reorder);
    }
}
console.log("Items in inventory is:");
console.log(item12);
