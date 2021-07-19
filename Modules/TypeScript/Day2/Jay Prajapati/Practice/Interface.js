let probeblyDuck = {
    walk: () => console.log("walk like a duck"),
    swim: () => console.log("swim like a duck"),
    quake: () => console.log("quake like a duck")
};
function DuckType(type) { }
DuckType(probeblyDuck);
probeblyDuck.quake();
probeblyDuck.swim();
probeblyDuck.walk();
let b = {
    Id: 1,
    Title: "bookTitle",
    Author: "Author1",
    MarkDameged: (reason) => console.log("Damaged : " + reason)
};
b.MarkDameged("Missing front Cover");
let newbook = {
    CatalogNumber: 123,
    title: "Jungle book",
    volume: 34033
};
console.log(newbook);
class Lib {
    DoWork() {
        console.log("Reading books");
    }
}
class ReferenceItem {
    constructor(title, year) {
        console.log("Instance of ReferenceItem is created....");
        this.title = title;
        this.year = year;
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(p) {
        this._publisher = p;
    }
}
let r = new ReferenceItem("Hello World", 2021);
// Inheritence
class Jurnol extends ReferenceItem {
    constructor() {
        super("Learn C#", 2012);
    }
}
let j = new Jurnol();

