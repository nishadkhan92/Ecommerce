var exp=require('express');

var app=exp();

app.listen(8200,function(req,res){
console.log("Server started at port no 8200");
});

app.get('/login.html',function(req,res){
res.sendFile(__dirname +"/login.html");

});

app.get('/*',function(req,res){
res.send("<h1>Welcome </h1> <h3>Enter url</h3>");
});