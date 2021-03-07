let fs=require("fs");
function readFile(res)
{
    fs.readFile(res, 'utf8', function(err, data) {
        if (err)
        {
            console.log("File Not Found");
        }
        process.stdout.write(data);
    });
}   
let input=process.argv.slice(2);
for(let i=0;i<input.length;i++)
{
    readFile(input[i]);
}
