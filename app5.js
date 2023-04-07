var express=require("express");
const MongoClient=require('mongodb').MongoClient;
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/newdb');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
})
var app=express();

app.use(bodyParser.json());
app.use(express.static('public') );
app.use(bodyParser.urlencoded({
   extended: true
}));

app.post('/login', function(req,res){
   var name = req.body.name;
   var pass = req.body.password;
   var data = {
      "name": name,
      "password":pass
   }
   db.collection('details').find((data)).toArray( 
    function(err,docs){
        
        var ar=JSON.stringify(docs);
        
        if(ar.length!=2)
        return res.redirect('success.html');
        else
        {
        return res.redirect('index1.html');
        }
        
    })
})
app.post('/register',function(req,res)
{
   return res.redirect('register.html');
})

app.post('/reg_success', function(req,res){
   var name = req.body.name;
   var email =req.body.email;
   var pass = req.body.password;
   

   var data = {
      "name": name,
      "email":email,
      "password":pass,

   }
   db.collection('details').insertOne(data,function(err, collection){
   if (err) throw err;
      console.log("Record inserted Successfully");
   });
   return res.redirect('login.htm');
})

app.post('/success',function(req,res)
{
   
   return res.redirect('main.html');
})
/*app.post('/form',function(req,res)
{
   return res.redirect('regform.html');
})*/
app.post('/main',function(req,res)
{
   return res.redirect('main.html');
})
app.get('/',function(req,res){
   res.set({
      'Access-control-Allow-Origin': '*'
   });
   return res.redirect('login.htm');
})

app.post('/sharestory', function(req,res){
    var story= req.body.story;
    var data = {
       "story": story
       }
    db.collection('stories').insertOne(data,function(err, collection){
    if (err) throw err;
       console.log("Record inserted Successfully");
    });
    return res.redirect('sharestory.htm');
 })
 app.get('/sharestory',function(req,res)
 {
    return res.redirect('sharestory.htm');
 })
 app.get('/',function(req,res){
    res.set({
       'Access-control-Allow-Origin': '*'
    });
    return res.redirect('sharestory.htm');
 }).listen(3001)
console.log("server listening at port 3001");

/*var app1=express()
app1.use(express.json())
var database

app.get('/',(req,res)=> {
	res.send("Welcome to mongodb API")
})
app1.get('/',(req,res)=>{
	database.collection('stories').find({}).toArray((err,result)=>{
		if(err) throw err
		res.send(result)
	})
})

app1.listen(8080,()=>{
	MongoClient.connect("mongodb://localhost:27017",{useNewUrlParser: true}, (error,result)=>{
	if(error) throw error
	database=result.db('new2db')
	console.log('Connection successful')
    })
})*/
