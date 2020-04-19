const express = require("express");

const app= express();

app.get("/",function(req, res){
  res.send("<h1>Hello Anuj</h1>");
});
app.get("/contact",function(req,res){
  res.send("contact me at: anujarora0502@gmail.com");
});
app.get("/about",function(req,res){
  res.send("<p>My name is Anuj Arora<br>I am 19 years old.<br>I a pursuing Computer Science Engineering.</p>")
});
app.get("/hobbies",function(req,res){
  res.send("coding");
})

app.listen(3000,function(){
  console.log("Server has started on port 3000");
});
