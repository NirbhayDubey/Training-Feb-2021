let products = [
    { productId: 1, productName: "Product1", quntityAvailable: 100, pricePerUnit: 20 },
    { productId: 2, productName: "Product2", quntityAvailable: 30, pricePerUnit: 200 },
    { productId: 3, productName: "Product3", quntityAvailable: 20, pricePerUnit: 100 },
    { productId: 4, productName: "Product4", quntityAvailable: 50, pricePerUnit: 40 },
    { productId: 5, productName: "Product5", quntityAvailable: 60, pricePerUnit: 50 }
];
let Customers = [
    { customerId: 1, Name: "Jay", City: "Vijapur", },
    { customerId: 2, Name: "Adam", City: "Ahmedabad", },
    { customerId: 3, Name: "John", City: "Surat", },
    { customerId: 4, Name: "Smith", City: "Baroda", }
];
let purchaseData = [];
function ShowProducts() {
    console.log("ProdudtID\tProductName\tQntAvailabel\tPrice/Unit\t");
    for (const p of products) {
        console.log(`${p.productId}\t\t${p.productName}\t\t${p.quntityAvailable}\t\t${p.pricePerUnit}`);
    }
}
function ShowPurchaseData() {
    console.log("CustomerID\tProdudtID\tProductName\tQntity\tPrice\tDate");
    for (const p of purchaseData) {
        console.log(`${p.CustomerId}\t\t${p.ProductId}\t\t${p.ProductName}\t${p.Qntity}\t${p.Price}\t${p.Date}`);
    }
}
function PurchageProduct(CID, PID, Qnt) {
    let p = products.filter(i => i.productId == PID)[0];
    let index = products.indexOf(p);
    let c = Customers.filter(c => c.customerId == CID)[0];
    if (p != null) {
        if (p.quntityAvailable > Qnt) {
            let pd = { CustomerId: c.customerId, ProductId: p.productId, ProductName: p.productName, Date: new Date().toDateString(), Qntity: Qnt, Price: (Qnt * p.pricePerUnit) };
            purchaseData.push(pd);
            p.quntityAvailable -= Qnt;
            products.splice(index, 1, p);
            // delete products.filter(i=>i.productId == PID)[0];
            //products.push(p);
            if (p.quntityAvailable < 5) {
                ReOrder(p.productId, 50);
            }
        }
        else {
            console.log("No Enough Quntity available");
        }
    }
    else {
        console.log("choose valid Product");
    }
}
function ReOrder(PID, Qnt) {
    let p = products.filter(i => i.productId == PID)[0];
    let index = products.indexOf(p);
    p.quntityAvailable += Qnt;
    products.splice(index, 1, p);
    //delete products.filter(i=>i.productId == PID)[0];
    //products.push(p);
}
console.log("=======================ShowProducts==========================");
ShowProducts();
console.log("\n\n=====================PurchageProduct(Cid: 1, Pid : 1, Qnt : 30 )============================");
PurchageProduct(1, 1, 30);
console.log("\n\n========================ShowPurchaseData=========================");
ShowPurchaseData();
console.log("\n\n========================ShowProducts=========================");
ShowProducts();
