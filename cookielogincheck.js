var exp=require('express');
var cookieParser=require('cookie-parser')
var app=exp();
app.use(cookieParser());

app.listen(8200,function(req,res){
console.log("Server started at port no 8200");
});

app.get('/cookielogin.html',function(req,res){
res.sendFile(__dirname +"/cookielogin.html");
res.cookie("loginerrmsg","Invalide Id/Pwd");

});

app.get('/cookielogincheck',function(req,res){
  var name=req.query.uid;
  var pwd=req.query.pwd;

  if(name=='object' && pwd=='knowit')
  {
	res.send("<h2>login success</h2>");
  }
  else
  {
      //if(req.cookies.loginerrmsg)
	//res.send("<h3>"+req.cookies.loginerrmsg+"</h3>");
         res.redirect('/cookielogin.html')
}
});

app.get('/*',function(req,res){
res.send("<h1>Welcome </h1> <h3>Enter url</h3>");
});