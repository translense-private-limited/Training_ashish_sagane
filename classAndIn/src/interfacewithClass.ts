
interface TakePhoto{
    cameraMode:string;
    burst:string;
    filter:string;
}

interface Story{
    createStory():string;
}

class Youtube implements TakePhoto{
    constructor(
        public cameraMode :string,
        public burst:string,
        public filter:string
    ){}

    useCameraMode(){
        return this.cameraMode;
    }
}

class Instagram implements TakePhoto,Story{
    constructor(
        public cameraMode :string,
        public burst:string,
        public filter:string,
        public short :string
    ){}

    createStory(): string {
        return "https://storylink.com"
    }
    
}

// const interfaceObj=new TakePhoto() error


const youtubeObj=new Youtube("32Mp","60img","nofilter")

const instagramObj=new Instagram("64Mp","120img","vintage","30sec")
instagramObj.createStory();


export{}