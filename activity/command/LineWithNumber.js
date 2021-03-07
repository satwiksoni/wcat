const fs = require('fs'); 
const readline = require('readline'); 

function LineNumberubg(src)
{
    const file = readline.createInterface({ 
        input: fs.createReadStream(src), 
    });     

    let lineNo=0;
    file.on('line', (line) => { 
        console.log(lineNo++,line); 
    }); 
}

function numbering(file)
{
    LineNumberubg(file);
}
module.exports={
    numbering:numbering
}


