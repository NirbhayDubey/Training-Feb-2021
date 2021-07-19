//Assignment of day 2 ::
console.log('==============================Welcome to PARTH GENERAL STORE ============================================\n')

//making interface :

interface RetailShop{
InventoryId : number;
InventoryName : string;
InventoryQuantity: number;
InventoryPrice: number;
InvDescription ?: string;
}

//store details of invntories in array
var inv : RetailShop[] = 
                [{InventoryId : 1 ,InventoryName : 'newspaper',InventoryQuantity : 15 ,InventoryPrice : 1500,InvDescription:'Only Gujarat samachar'},
                {InventoryId : 2 ,InventoryName : 'books',InventoryQuantity : 30 ,InventoryPrice : 2500 ,InvDescription : 'Only NCERT'},
                {InventoryId : 3 ,InventoryName : 'toys',InventoryQuantity : 10 ,InventoryPrice : 1600} ];


                //create class
class RetailStocks {

    
    //make function for place order
    Place(id:number,qty:number){
        var order = inv.filter(i=>i.InventoryId==id);

        if(qty > 4){
            if (order[0] == null){
            console.log('==================================');
                console.log('Return Valid Id ');
            }
            else if(order[0].InventoryQuantity - qty >= 0 ){
                inv[inv.indexOf(order[0])].InventoryQuantity = inv[inv.indexOf(order[0])].InventoryQuantity-qty;
            console.log('==================================');
                console.log('congrats! ur order placed!');

                        }
                        else{
                        console.log('==================================');
                            console.log('Sorry bro not in stock!  ');
                        }

        }
        else {
            console.log('==================================');
            console.log('\nQty should be greater than 5');
        }


    }

    //make a function for availaible stock :

    StockAvailaible(){
        console.log('Lists of stocks availaible :');
        for (const val of inv){
            console.log(`Id is : ${val.InventoryId}, Name is : ${val.InventoryName} , Quantiy is : ${val.InventoryQuantity}, Price of inventory is  :${ val.InventoryPrice} Inventory Description ${val.InvDescription}`);
        }
    }
   
    }


let n = new RetailStocks();
n.StockAvailaible();
n.Place(2,5);
n.StockAvailaible();
n.Place(1,10);
n.StockAvailaible();
n.Place(1,10);
n.StockAvailaible();