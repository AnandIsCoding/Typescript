// Pick allows us to create a new type by selecting a set of properties (keys) from an existing type

interface Address{
    district:string,
    pinn:number
}
interface User{
    id:number,
    name:string,
    age:number,
    addresss:Address
}

type UpdateProp = Pick<User, 'address' | 'age' >

function printDistrict(updatedProps:UpdateProp){
    console.log(`district is ${updatedProps.address?.city}`)
}


// ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
// Partial : an interface where all properties are optional ?:
type prtProp = Partial<User>

