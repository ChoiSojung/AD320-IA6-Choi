var fs = require ('fs');



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

filterDir(process.argv[2], process.argv[3], logF);

