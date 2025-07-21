class Product {
    public name: string;
    public category: string;
    private price: number;
    protected brand: string;
    readonly id: number = 123; // can't be modified

    constructor(nm: string, ctg: string, prc: number, brd: string) {
        this.name = nm;
        this.category = ctg;
        this.price = prc;
        this.brand = brd
    }
    getPrice() {
        return `Price of ${this.name} is ${this.price}`
    }
}
const product1 = new Product('MSI Gf63 Laptop', 'Electronics', 60000, 'MSI')
product1.name = 'Anand'  // it will be updated
// product1.price = 0    //  ❌w ill give error, becoz it is private property
console.log(product1)

console.log(product1.getPrice())





//  2nd example , best way, with getter and setter function  get set

class Music{
    constructor(public readonly _name:string, public length:number, public singer:string){}
    get printName(){
        return this._name
    }
    set updateLength(val:number){
        this.length = val
    }
}
const m1 = new Music('Hanuman Chalisa',5,'Gulshan Kumar')
const m2 = new Music('Kanchi tori kaya',3,'Gram Chikatshalay')
console.log(`m1 singer is ${m1._name}`)
console.log(`m2 singer is ${m2._name}`)
console.log(m1.printName)
console.log(m1.updateLength = 99)
// m1.name = 'kk'





//  static : properties declared with static in any class can be accessed with creating any instance
class myApplication{
    static version:1.0
}
console.log(myApplication.version)     // 1.0  ✅               it will not give any error