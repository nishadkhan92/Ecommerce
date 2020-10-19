var exp = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = exp();
app.use(bodyParser.urlencoded({'extended':false}));
app.use(session({'secret':'this is secret'}));

app.get('/login.html',function(req,res){
     res.sendFile(__dirname+"/login.html");
});

app.post('/logincheck',function(req,res){
     if(req.body.uid == "nishad" && req.body.pwd == "nishad123")
     {
         //res.send("Succesful login");
         req.session.uid = req.body.uid;
         res.redirect('/welcome');
     }
     else
	 res.send("Failed login");
});

app.all('/welcome',function(req,res){
     if(req.session.uid)
         res.send("<h1> WELCOME "+req.session.uid+"</h1>");
     else
	 res.send("<h1> WELCOME GUEST </h1>");
});


app.listen(8100, function(req,res){
    console.log('server started at 8100');
});