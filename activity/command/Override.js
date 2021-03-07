let fs=require("fs");
function override(src1,src2)
{    
    let temp =fs.readFileSync(src1,"utf-8");
    fs.writeFileSync(src2,temp);
}

module.exports={
    override:override
}