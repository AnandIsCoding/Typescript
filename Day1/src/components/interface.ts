// Wite a function isLegal and return legality to vote, accepts a user is argument/parameter

interface Address{
        city:string,
        pin?:number
}

interface User{
    name:string,
    age:number,
    address?:Address
}

let userr:User = {
    name:'Anand',
    age:21,
    address:{
        city:'Katihar',
         pin:854105
    }
}
const canVote = (user:User) : boolean =>{
    return user.age >= 18
}
console.log(canVote(userr))





interface Office{
  acre:number,
  address:Address
}

//  Extend ✅✅✅✅✅✅✅✅✅✅

interface AllUser{
    name:string,
    age:number,
    email:string
}

interface Admin extends AllUser{
    isAdmin:boolean
}

function checkAvailabilityOfProperties(obj:Admin){
    //  when obj:AllUser if we try to c.log(obj.) athan it will give access to name age email, but if obj:Admin than it will give access to isAdmin also
    // obj.
}


// interface merging ✅✅✅✅✅✅✅✅✅✅
// if there are two interface with same name ex: Abcd and if one has email and another has address, than Abcd will be merged and Abcd will contain both
