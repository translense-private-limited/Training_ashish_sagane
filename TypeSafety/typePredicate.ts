let st="abc";

function checking(val:string |number):val is string{
 return (val as string) !==undefined;
}

const doublechecking= (val :string| number)=>{
    if(checking(val)){
        val
    }
    else {
        val
    }
}


type Fish={ swim:()=>void;}
type Bird ={ fly :()=> void;}

function checkfish(pet :Fish| Bird):pet is Fish{
 return (pet as Fish).swim !==undefined;
}

const doublecheck=(pet :Fish | Bird)=>{
 if(checkfish(pet)){
    pet
 }
 else {
    pet
 }
}