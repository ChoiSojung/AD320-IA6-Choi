var fs = require ('fs');
var num = undefined;

function countLine (callback){
    fs.readFile(process.argv[2],function done(err, content){
        var str = content.toString();
        var array = str.split("\n");
        num = array.length-1;
        callback();
    });
}

function logNum(){
    console.log(num);
}

countLine(logNum);
