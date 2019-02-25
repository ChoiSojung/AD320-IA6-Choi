var fs = require ('fs');
var list;

function mod(){
}

function getF(){
    fs.readdir(process.argv[2], function(err, list){
        setData(list);
    });
    returnData(list);
    
}

function setData(list){
    this.list=list;
}

function returnData(list){
    return list;
}


module.exports.mod = mod;
module.exports.getF = getF;

//test 
var myList = this.getF();

for (var i = 0; i<myList.length; i++){
    console.log(myList[i]);
}


                