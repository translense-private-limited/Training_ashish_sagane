// with union no restriction-->
const user3:(string|number)[]=[1,"2",4,5,"4"];  

 let  user4:[string,number,boolean];

user4=['2',2,true]
// user4=[2,'2',true]; error  

user4.push(2); // -> not following protocol of tuple

let userInfo: [string, number] = ["Alice", 30];


type User5=[string,number];
const user5:User5[]=[ ['ashi',4]  ];

type CartItem = [string, number];

const cart: CartItem[] = [
  ["Laptop", 1],
  ["Wireless Mouse", 2],
  ["Keyboard", 1]
];

function printCartItems(items: CartItem[]): void {
  items.forEach(([name, quantity]) => {
    console.log(`Product: ${name}, Quantity: ${quantity}`);
  });
}

printCartItems(cart);


export{}
