type User={
    readonly _id:string
    name :string
    isActive :boolean
    cardDetails ?:string
}

let newUser :User ={
    _id :'123',
    name:'ashish',
    isActive:true,
    // creditDetails :'' -> optional
}

newUser.name="Sagane"; // allow
//  newUser._id='5544ddd';  ->error as it is readonly 
