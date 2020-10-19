var exp=require('express');

var app=exp();

app.listen(8100,function(req,res){
console.log("Server started at port no 8100");
});

app.get('/home',function(req,res){
res.send("Welcome to Home Page");
});

app.get('/*',function(req,res){
res.send("<h1>Welcome </h1> enter url");
});