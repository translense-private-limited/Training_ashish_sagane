class newUser{

    readonly userId :number;
    name:string;
    city:string;
    private email : string;
    
    constructor(userId:number,name:string,city:string,email:string){
        this.userId=userId;
        this.name=name;
        this.city=city;
        this.email=email;
    }

    print(){
        console.log('Given user details :',this);
    }
}

const newCandidate=new newUser(1,'ashish','pune','a@a.com');

// newCandidate.email      can't access private property   error 
// newCandidate.userId=2;  can't modify readonly property  error



//Shorthand ->

class newUser2{
    readonly userId :number=Math.floor(Math.random()*100);
    constructor(
        public name:string,
        public city:string,
        private email:string,

    ){}

    print(){
        console.log('Given user details :',this);
    }
}

const newCandidate2=new newUser2('ashish','pune','a@a.com');


//getter and setter ->


class newUser3{
    readonly userId :number=Math.floor(Math.random()*100);
    constructor(
        public name:string,
        public city:string,
        private email:string,

    ){}

    get getEmail():string{
        return this.email;
    }

    get getName():string{
        return this.name;
    }


    set setEmail(newemail:string){
        if(newemail.includes('@')){
            this.email=newemail;
        }
    }

    set setName(newname:string){
        this.name=newname;
    }
}


// protected ->


class User3{
    private count=1;
    constructor(
        protected courseId:number
    ){}
}

class SubUser extends User3{
 
    constructor(
        check:boolean,
        value:number
    ){
        super(value)
    }
    
    changeCount(){
        // this.count=4;  error

    }

    changeCourseId(){
        this.courseId=44;
    }


}

const newmember=new SubUser(true,3);





export {}
