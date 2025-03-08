class User4<T>{
    constructor(
        public key:T,
        public name:string,
        private id:number
    ){}
    }
    
    let obj=new User4<string>("123dbdc","ashish",2);
    
    const obj2=new User4<number>(123,"ashish",2);