var exp = require('express');
var bodyP = require('body-parser');
var mongoose = require('mongoose');

var app = exp();

app.use(bodyP.urlencoded({'extended': false}));

app.set('view engine','pug');
app.set('views','./views');

mongoose.connect("mongodb://localhost:27017/test");
var personSchema = mongoose.Schema({
	name: String,
	age: Number,
	nationality: String
});
var Person = mongoose.model("person",personSchema);


app.get('/register',function(req,res){
     res.render('personform');  //personform.pug in views folder
});

app.post('/insert',function(req,res){
     var newperson = new Person({
	  name: req.body.nm,
	  age: req.body.age,
	  nationality: req.body.nation
     });
     newperson.save(function(err,insperson){
	  if(!err)
		res.send(insperson.name+" saved in collection");
     });
});

app.get('/findall',function(req,res){
     Person.find(function(err,alldoc){
	 //res.json(alldoc);
         res.render('persons',{'data': alldoc});   //persons.pug file
      });
});

app.get('/removebyname/:nm',function(req,res){
       Person.remove({name: req.params.nm},function(err,response){
	  res.send(response.n + " documents deleted");
      });
});

app.get('/updateage/:nm/:ag',function(req,res){
      Person.update({name: req.params.nm},{age: req.params.ag},function(err,response){
	   res.send(response.n + " documents updated");
      });
});


app.listen(8100,function(){
    console.log("server started on 8100");
});