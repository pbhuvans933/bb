const var1:number=12;

const var2:number=25;

const var3:number=89;

let largest:number;

if(var1 >= var2 && var1 >= var3) {

    largest = var1;

}

else if (var2 >= var1 && var2 >= var3) {

    largest = var2;

}

else {

    largest = var3;

}



console.log(`the largest number is:${largest}`);