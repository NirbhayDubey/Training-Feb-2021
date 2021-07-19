interface IRetailShop{
    InventoryId : number;
    Name : string;
    Quantity : number;
    Price : number;
}

var obj : IRetailShop[] =  [
{ InventoryId :1,Name:"Maggie",Quantity :50,Price:12},
{ InventoryId :2,Name:"Pasta",Quantity :100,Price:45},
{ InventoryId :3,Name:"biscuit",Quantity:200,Price:15}

];

class RetailShop {

RecordQty(){
    for (const val of obj) 
    {
         console.log
         (`Id: ${val.InventoryId},
          Name: ${val.Name},
          Quantity: ${val.Quantity},
          Price: ${val.Price} `);
    }
}
Purchase(id:number,Item:number){
    var data = obj.filter(x=>x.InventoryId==id);
    if(data[0].Quantity-Item >= 0){
        obj[obj.indexOf(data[0])].Quantity = Item;
        console.log("Order is Placed !");
     }
    
    else if  (Item<5){
            console.log("Qty Should  be more than or equal to 5");
        }
        
    else{
        console.log("Reorder, No enough Quantity ");
         }
        }
    }

var PurchasedItem = new RetailShop();
PurchasedItem.RecordQty();
PurchasedItem.Purchase(1,10);
PurchasedItem.RecordQty();
