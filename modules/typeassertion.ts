//Type assertion ->

let a:any=14;

// a.toLowerCase(); 

(a as string).toLocaleLowerCase();
(a as number).toFixed();

(<number>a).toString();


// type Casting

let r=Number('12');
let ab=String(12);
let check=Boolean('a');




class Tv{
    TvSwitchOff(){
        console.log('Tv switch off')
    }
}
class Car{
    CarOff(){
        console.log('Car switch off')
    }
}

function Remote(remote:Tv | Car){
    if(remote instanceof Tv){
        remote.TvSwitchOff()
    }
    else if(remote instanceof Car){
        remote.CarOff();
    }
}

let tvobj=new Tv();
Remote(tvobj);