type User ={
    uname:string ;
    email:string;
    isActive:boolean;
}

const createUser=(user :User):User=>{
 return {uname:'ashish',email:'ashish@g.com',isActive:true}
}

let newUser=createUser({uname:'',email:'',isActive:false})

console.log(newUser);

//Combining Multiple typeAlias 

type cardNumber={
    cardnumber:string
}
type cardDate={
    carddate : string
}

type cardDetails= cardNumber & cardDate & {
    cvv :string
}
 let usercard:cardDetails;

 
export {}