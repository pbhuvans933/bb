const fs = require('fs');

const path = require('path');



//create folder with async call back function

/*fs.mkdir(path.join(__dirname, '/readfile'), {}, function(err){

    if(err)throw err;

    console.log('');

});*/



fs.writeFile(path.join(__dirname, '/readfile','/writefile.java'),

'i am writing assignment1',

(err)=>{

    if(err)throw err;

    console.log('File written to ...');

 });



 /*fs.readFile(path.join(__dirname, '/readfile','/writefile.java'),'utf8',(err,data)=>{

    if(err)throw err;

    console.log(data);

});*/