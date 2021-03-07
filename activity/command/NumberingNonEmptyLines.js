const fs = require('fs'); 
const readline = require('readline'); 

function LineNumberubg(src)
{
    const file = readline.createInterface({ 
        input: fs.createReadStream(src), 
    });     

    let lineNo=0;
    file.on('line', (line) => { 
        if(line!="")
        {
            console.log(lineNo++,line);
        }
    }); 
}

module.exports={
    numberingNEL:LineNumberubg
}
