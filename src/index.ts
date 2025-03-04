
// Unions ->

let score :number | string=23;

score='45';
score=44;
console.log(score);

type User ={
    id :number;
    name :string;
    email?:string;
}

type Admin ={
    id:number;
    adminName:string;
}

let newUser :User | Admin={
    id:22,
    name:'New User',
    email:'a@a.com'
}

console.log(newUser)

newUser={
    id:23,
    adminName:'New Admin',
}

console.log(newUser)


function getDbId(id:number | string){
    console.log(id);

    if(typeof id === 'string'){

        id.toLocaleLowerCase() //string methods
    }
    else{
        id.toFixed(); //number method
    }
    
}


//Unions with Array

const data: string[] | number[]= [1,2,3]           
// const data2: string[] | number[]= ['1',2,3]    error       
const data2: string[] | number[]= ['1','2','3']    

const data3:(string|number |boolean)[]=[1,'2',true];
const data4:any[]=[1,'2',true];


let seatAllotment:'aisle'| 'middle'| 'window';
seatAllotment="aisle";
// seatAllotment='crew';                    error



function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      //'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }



//   Enums ->

enum SeatChoice {
    AISLE = 'aisle',
    WINDOW = 1,
    MIDDLE
  }
  
  const passanger = SeatChoice.AISLE;
  
  
  // to Less js code generate
  
  const enum SeatChoice2 {
    AISLE = 'aisle',
    WINDOW = 1,
    MIDDLE
  }
  
  const passanger2 = SeatChoice.MIDDLE;
  
  console.log(passanger)
  console.log(passanger2)
  export { }
  




export {}


