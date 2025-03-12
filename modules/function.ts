function sum(...args:number[]){
    let a= args.reduce((accumulator,current,index)=>
         accumulator+current
 );
 return a;
 }
 
 let x=sum(1,2,3,4,5);
 
 console.log(x);
 
 
 // function overloading->
 
 function overload(val1:string,val2?:number){
   if(typeof val1==="string" && val2===undefined){
     return val1;
   }
  else if(typeof val1==="string" && val2 !==undefined)
   {
     return val2;
   }
   else throw new Error('something went wrong')
 }
 
 overload('hello',2);
 overload('hey');
 
 // overload(); error 
 
 export{}