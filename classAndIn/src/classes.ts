class User {
    id :number;
    name:string;
    email:string;
    permanentAdress:string='';
    currentAdress?:string; 

    constructor(id:number,name:string,email:string){
        this.id=id;
        this.name=name;
        this.email=email;
        
    }
    print(){
        console.log('User details : ',this.id ,this.name,this.email,this.permanentAdress)
    }
}

const newUser= new User(Math.floor(Math.random()*10),'ashish','aa@a.com')

newUser.permanentAdress='Pune,Maharashtra';


export {}