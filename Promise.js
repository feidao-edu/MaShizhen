let Myjson = {};
const a =()=>{
    const p = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("sucess");
        }, 2000);
    });
    return p;            
}
const b = ()=>{
    const p1 = new Promise(function (resolve, reject) {
            setTimeout(function(){
                 reject("err");
             }, 3000);
        
    });
    return p1;            
}
function c() { 
    console.log("immediately"  + "  :  " + new Date())
}
a().then(function (data) {
    console.log(data + "  :  " + new Date());
    Myjson[data] = new Date();
    return b();
}).catch(function (data) {
    console.log(data + "  :  " + new Date());
    Myjson[data] = new Date();
    console.log(JSON.stringify(Myjson))
    });
c();
