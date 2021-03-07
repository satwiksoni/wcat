#! /usr/bin/env node
let input=process.argv.splice(2);
let read=require("./command/read.js");
let breaker=require("./command/LineBreakerToSingleOne");
let numbering=require("./command/LineWithNumber");
let numberingNEL=require("./command/NumberingNonEmptyLines");
let append=require("./command/Append");
let override=require("./command/Override");
let Remove=require("./command/RemoveLargeSpace");

switch(input[0])
{
         
    case "-s":
    {   
        if(input.length==2)
        {
            breaker.breaker(input[1]);
            break;
        }
    else
    {
        Remove.Rm(input[1],input[3]);
        break;
    }
    }
    case"-n":
    {
        numbering.numbering(input[1]);
        break;
    }
    case"-b":
    {   
        numberingNEL.numberingNEL(input[1]);
        break;
    }
    default:
    {
        if(input[1]==">")
        {
            override.override(input[0],input[2]);
            break;
        }
        else if(input[1]==">>")
        {
            append.append(input[0],input[2]);
            break;
        }
        else 
           read.read(input);
        break;
        
    }
}

// 1- wcat filename => displays content of the file in the terminal 
// 2- wcat filename1 filename2 filename3... => displays content of all files in the terminal(contactinated form) in the given order.
// 3- wcat -s filename => convert big line breaks into a singular file 
// 4- wcat -n filename => give numbering to all the lines 
// 5- wcat -b filename => give numbering to non-empty lines 
// 6- wcat filename > filename2 => put all the content of filename into filename2 by overriding also creates filename2 if it doesn't exist.
// 7- wcat filename >> filename2 => append all the content of filename into filename2
// 8- wcat -s filename > filename2 =>get the file content of filename remove large spaces and save the output in filename2

