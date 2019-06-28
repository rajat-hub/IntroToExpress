var express=require("express");
var app=express();



app.get('/',function(req,res){
    res.send("Hi there,welcome to my assignment");
});

app.get('/speak/:animalname',function(req,res){
    var animal=req.params.animalname;
    
    if (animal == "pig"){
      res.send("The " + animal + " says 'Oink'");  
    }else if (animal == "Cow"){
      res.send("The " + animal + " says 'Moo'");  
    }else if (animal == "dog"){
      res.send("The " + animal + " says 'Woof Woof'");  
    }
    
});

app.get('/repeat/:str/:num',function(req,res){
    var nums=req.params.num;
    var strs=req.params.str;
    
    var word="";
    for(var i=0;i<nums;i++){
        word = word + "  " + strs;
    }
    res.send(word);
});

app.get("*",function(req, res) {
   res.send("Sorry , page not found...what are you doing with your life?"); 
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
});
