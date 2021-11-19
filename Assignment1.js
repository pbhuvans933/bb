const fs = require('fs');
const path = require('path');

/*fs.mkdir(path.join(__dirname,'/Training Details'),{},function(err){

    if(err)throw err;

    console.log('')

});*/




/*fs.writeFile(path.join(__dirname,'/Training Details','details.txt')

,' student name = Bhuvaneswar '

,(err)=>{

    if(err)throw err;

    console.log('file written to....');

});*/



/*fs.appendFile(path.join(__dirname,'Training Details','details.txt')

,' my student Id is 20870 '

,(err)=>{

    if(err)throw err;

    console.log('file append to....');

});*/




fs.readFile(path.join(__dirname,'/Training Details','details.txt'),'utf8',(err,data)=>{

    if(err)throw err;

    console.log(data);

});