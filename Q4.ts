export class Student{
    stdid:number;
    stdname:String;
    stdclass:any;
    constructor(data?:any){
   
        this.stdid=data.stdid || 1234;
        this.stdname=data.stdname || 'bhuvan';
        this.stdclass=data.stdclass || 'btech';
   
    } 
}