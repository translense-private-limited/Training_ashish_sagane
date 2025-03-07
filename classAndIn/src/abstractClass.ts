
abstract class TakePhoto{
    constructor(
        public cameraMode :string,
        public filter:string,

    ){}
    abstract getSepia():void;
    getReelTime():number{
        //complex calculation
        return 60;
    }

}

abstract class Reel{
 constructor(
    time:number,
    Type:string
 ){

 }
}
class Instagram2 extends TakePhoto{
    constructor(
        public cameraMode :string,
        public filter:string,
        private burst2 :number
    ){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log("This is sepia of photo")
    }

}

const InstaObj=new Instagram2('32mp','Aesthetic',60);

InstaObj.getReelTime();