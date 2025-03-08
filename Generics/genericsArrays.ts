
// generics Array 

const host:Array<string>=[]

const count:Array<number>=[];


function loggers<T>(arg:Array<T>):T{
    return arg[1];
}


// shorthand-->

function getProduct<T>(product:T[]):T{
    //  return product   error
    // return 4 as T;    allow 
    // return <T> 4;     allow


    return product[3];
}


let a=getProduct([2,3,5,6,2])


