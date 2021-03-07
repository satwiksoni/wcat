let fs=require("fs");
function override(src1,src2)
{    
    let temp=fs.readFileSync(src1,"utf-8");
    temp=temp.replace(/ {2,}/g,' ');
    fs.appendFileSync(src2,temp);
}
let input=process.argv;
override(input[2],input[3]);
