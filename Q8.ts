import {Car} from './Q7';
let saleprice:number;
 class Truck extends Car{
    weight:number;
    constructor(data?:any){
        super(data);
        this.weight=data.weight;
    }
}
const t:Truck={weight:3000,speed:150,regularPrice:3000000,color:'white'};
function getSalePrice()
    {
if(t.weight>2000)
{
    saleprice=t.regularPrice-(t.regularPrice*0.1);
    console.log("the 10 per discount then :"+saleprice );
}
else{
    saleprice=t.regularPrice-(t.regularPrice*0.2);
    console.log("the 20 per discount then :"+saleprice );
}
    }
    getSalePrice();