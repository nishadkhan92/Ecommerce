var exp=require('express');
var fs=require('fs');
var app=exp();

app.use(function(req,res,next){
var d= new Date();
console.log("Request recived at "+d.toString()+"for "+req.url);

var data="Request recived at "+d.toString()+"for "+req.url+"\n";
fs.appendFile('log.txt',data,function(err){
	if(!err)
	console.log("data written");	
});
next();
});

app.get('/*',function(req,res){
res.send("Invalide URL");
});

app.listen(8100,function(){
console.log("sever start on port  :8100");
});