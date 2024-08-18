import express from "express";
var app = express();

app.get("/", (req,res) =>{
    // console.log(req.rawHeaders);
    res.send("<h1>Hello!</h1>");
});

app.get("/about", (req,res) =>{
    res.send("<h1>About ME</h1><p>My name is Navin and I am a human.</p>");
});

app.get("/contact", (req,res) =>{
    res.send("<h1>Contact</h1><p>To connect with me: cyt.navin6@gmail.com</p>");
});

app.listen(3000,() =>{
    console.log("Server 3000 running...");
});