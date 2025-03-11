interface Circle{
    kind :'circle',
    radius:number
}
interface Square{
    kind:'square',
    side:number
}
interface React{
    kind:'react',
    length:number,
    width:number
}

type Shape=Circle | Square ;

function getArea(shape :Shape){
 if(shape.kind==='circle'){
    return Math.PI * shape.radius**2;
 }
 return shape.side**2;
}


// 2. Exhausting Checking ->

function correctCheck(shape:Shape){
switch(shape.kind){
    case 'circle': 
    return Math.PI * shape.radius**2;

    case 'square' :
         return  shape.side **2;

    default : 
    const _defaultshape: never =shape
    return _defaultshape;
}
}
