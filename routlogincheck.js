var exp=require('express');

var app=exp();

app.listen(8300,function(req,res){
console.log("Server started at port no 8300");
});

app.get('/login/:name/:pwd',function(req,res){
var name=req.params.name;
var pwd=req.params.pwd;

if(name=='object' && pwd=='knowit')
{
	res.send("<h2>login success</h2>");
}
else
{
	res.send("<h3>login failed</h3>");
}
});

app.get('/*',function(req,res){
res.send("<h1>Welcome </h1> <h3>Enter url</h3>");
});