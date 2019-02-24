var fs = require ('fs');
var arg1 = process.argv[2];
var arg2 = process.argv[3];

function filterDir(x, y, callback){
    fs.readdir(x, function myFunction (err, list){
        for (var i = 0; i<list.length; i++){
            var str = list[i].toString();
            var array = str.split(".");
            if (array.length > 1 && array[array.length-1] == y){
                callback(str);
            }
           
        }
         
    });

}

function logF(x){
    console.log(x);
}

filterDir(arg1, arg2, logF);

