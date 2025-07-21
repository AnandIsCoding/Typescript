type NumberOrString = string | number

let id : NumberOrString = 4 
id = 'hyrb578'
console.log(`id is ${id}`)




type UserType = {
    name:string,
    age:number,
    course:string,
    readonly phone ?: number  // ?: make phone no optional
}


const user : UserType = {
    name:'Anand',
    age:21,
    course:'BCA'
}

const user1 : UserType = {
    name:'Aditya',
    age:21,
    course:'Proff.',
    phone:6205679886
}

// user1.phone = 8909  can't update readonly ❌

