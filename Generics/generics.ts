function log<Type>(para:Type){
    console.log(para);


}

log<string>("print this without console.log()")
log(2);


// generics with interface

interface Person<Type>{
    name:string,
    email:string,
    key: Type,
}

function createPerson(obj:Person<string>):Person<string>{
    obj.key.toLocaleLowerCase();   //now it is allow to use string in build methods

    return obj;
}


function identity<T>(value: T): T {
    return value;
    // return "hello"; not allow
}

console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello")); // "Hello"



interface Bootle{
    brand:string;
    types:string;
}

function logger<Bootle>(obj:Bootle){
 console.log("buy"); 
}

logger({brand:"test",types:"test"}) 



//arrow fun-->

const getProducts=(args:boolean):number=>{
    return 2;
}

const getDetail=<T>(args:T[]):T=>{
 // database operation
let a= args.length;
 let index=1;
 return args[index];
}






