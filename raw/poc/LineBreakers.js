const fs = require('fs'); 
const readline = require('readline'); 

function LineNumberubg(src)
{
    const file = readline.createInterface({ 
        input: fs.createReadStream(src), 
    });     

    let lineNo=0;
    file.on('line', (line) => { 
        if(line=="" && count==0)
        {
        console.log(lineNo++,line);
        count=1;
        }
        else if(line!="")
        {
            console.log(lineNo++,line);
            count=0;
        }

    }); 
}
LineNumberubg(process.argv[2]);
