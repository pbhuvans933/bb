export class Car{
    speed:number;
    regularPrice:number;
    color:String;
    constructor(data?:any){
        this.speed=data.speed || 100;
        this.regularPrice=data.regularPrice || 1000000;
        this.color=data.color || 'black';
    }

}