import { Product } from './Q5';
let gst:number=200;
let totalprice:number;
const p:Product={proid:456,proname:'mobile',proprice:15000};
console.log("the proid is " +p.proid+"  the proname is " +p.proname+"  the proprice is " +p.proprice);
function Price()
{
  totalprice=p.proprice+gst;
  console.log("the total price is :" +totalprice)
}
Price();