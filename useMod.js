var fs = require ('fs');
var myModule = require('./mod');


function filterDir(callback){
    var myList = myModule.getF();
    for (var i=0; i<myList.length; i++){
        var str = myList[i].toString();
        var array = str.split('.');
        if (array.length>1 && array[array.length-1]==y){
            callback(str);
        }
    }
}



function logF(x){
    console.log(x);
}

filterDir(process.argv[3], logF);