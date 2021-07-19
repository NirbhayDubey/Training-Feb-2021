var obj = [
    { InventoryId: 1, Name: "Maggie", Quantity: 50, Price: 12 },
    { InventoryId: 2, Name: "Pasta", Quantity: 100, Price: 45 },
    { InventoryId: 3, Name: "biscuit", Quantity: 200, Price: 15 }
];
var RetailShop = /** @class */ (function () {
    function RetailShop() {
    }
    RetailShop.prototype.RecordQty = function () {
        for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
            var val = obj_1[_i];
            console.log("Id: " + val.InventoryId + ",\n          Name: " + val.Name + ",\n          Quantity: " + val.Quantity + ",\n          Price: " + val.Price + " ");
        }
    };
    RetailShop.prototype.Purchase = function (id, Item) {
        var data = obj.filter(function (x) { return x.InventoryId == id; });
        if (data[0].Quantity - Item >= 0) {
            obj[obj.indexOf(data[0])].Quantity = Item;
            console.log("Order is Placed !");
        }
        else if (Item < 5) {
            console.log("Qty Should  be more than or equal to 5");
        }
        else {
            console.log("Reorder, No enough Quantity ");
        }
    };
    return RetailShop;
}());
var PurchasedItem = new RetailShop();
PurchasedItem.RecordQty();
PurchasedItem.Purchase(1, 10);
PurchasedItem.RecordQty();
