
let price1:number=12;
export  const getDatails=(price :number)=>{
    price=price1;
 console.log(price)
}

export const getPayment=()=>{
    return price1
}

export default class Payment{
    constructor(public pay:number,public details?:string){}
}