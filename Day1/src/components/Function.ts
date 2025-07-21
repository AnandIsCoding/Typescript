let calc = (num1:number, num2:number) : number => {
    return num1+num2
}
console.log(calc(2,3))


const isEven = (num:number) : boolean =>{
    return num % 2 === 0
}
console.log(isEven(4))
console.log(isEven(3))



//  Function overloading ✅✅

function print(a:string):void
function print(a:string, b?:number):void

function print(a:string, b?:number){
    if(typeof a === 'string' && typeof b === 'undefined'){
         console.log(`a is ${a}`)
    }
    else if(typeof a === 'string' && typeof b !== 'undefined'){
        console.log(`a is ${a} and b is ${b}`)
    }
}
print('anand')              //  "a is anand"
print('anand',1)            //  "a is anand and b is 1" 