export class Product{
 proid:number;
   proname:string;
   proprice:number;
   /* gst:number;
    totalprice:number;*/
    constructor(data?:any){
        this.proid=data.proid || 1234;
        this.proname=data.proname || 'laptop';
        this.proprice=data.proprice || 32000;
   
    }
   }