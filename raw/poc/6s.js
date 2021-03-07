let fs=require("fs");
function override(src1,src2)
{    
    let temp =fs.readFileSync(src1,"utf-8");
    fs.writeFileSync(src2,temp);
}
let input=process.argv;
override(input[2],input[3]);