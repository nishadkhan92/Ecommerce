var exp = require('express');

var app = exp();

app.use(exp.static('images'));

app.set('view engine','pug');
app.set('views','./views');

app.get('/first',function(req,res){
      res.render('first');    //first.pug in views folder
});

app.get('/dynamic/:nm',function(req,res){
      var nm = req.params.nm;
      res.render('first',{'name': nm });  //data sent to pug to make it dynamic
});

app.listen(8100,function(req,res){
    console.log("server started on 8100");
});
