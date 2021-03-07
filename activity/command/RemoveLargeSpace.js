let fs=require("fs");
function Remove(src1,src2)
{    
    let temp=fs.readFileSync(src1,"utf-8");
    temp=temp.replace(/ {2,}/g,' ');
    fs.appendFileSync(src2,temp);
}
module.exports={
    Rm:Remove
}