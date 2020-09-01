const express = require('express');
const app = express();
const fs = require("fs");


app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.render("userinput");
})  

app.get("/get_meta_data",(req,res)=>{
    console.log(req.query);
    const  {module_name,screen_name} = req.query;
    console.log(module_name,screen_name);
     if(module_name.toLowerCase() =='tradelicense' && screen_name.toLowerCase() == 'apply' )
         {
             console.log(true);
             fs.readFile('./public/tradelicense/apply.json','utf8',(err,data)=>{
                 console.log(data);
                 res.send(data);
             });
 
         }
         else if(module_name.toLowerCase() =='finance' && screen_name.toLowerCase() == 'collect'){
 
             fs.readFile('./public/finance/collect.json','utf8',(err,data)=>{
                 console.log(data);
                 res.send(data);
             });
         }
         else{
             console.log("Invalide Input");
         }
 
});


// For Post Request Need to change form method to POST first and then uncomment
// app.post("/get_meta_data",(req,res)=>{
//     console.log(req.body);
//    const  {module_name,screen_name} = req.body;
//    console.log(module_name,screen_name);
//     if(module_name.toLowerCase() =='tradelicense' && screen_name.toLowerCase() == 'apply' )
//         {
//             console.log(true);
//             fs.readFile('./public/tradelicense/apply.json','utf8',(err,data)=>{
//                 console.log(data);
//                 res.send(data);
//             });

//         }
//         else if(module_name.toLowerCase() =='finance' && screen_name.toLowerCase() == 'collect'){

//             fs.readFile('./public/finance/collect.json','utf8',(err,data)=>{
//                 console.log(data);
//                 res.send(data);
//             });
//         }
//         else{
//             console.log("Invalide Input");
//         }


// });

app.get("*",(req,res)=>{
    res.send("Incorrect Route");
})

app.listen('4009',(req,res)=>{
    console.log("Server is up and running");
});