function checkobject(obj:Date |string){
    if(obj instanceof Date){
   obj.getSeconds()
    }
    else{
       obj.toLocaleLowerCase();
    }
   
   }
   
   class User{
       constructor(name:string,
           email:string){}
       
   }
   const arr= new Array(1,2,3);
   const checkobjects=(val: Array<number>| User)=>{
   if(val instanceof User){
   
   }
   else {
       val.length
   }
   }
   