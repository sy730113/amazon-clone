import express from "express";
const app=express();
const port=3034;
app.get("/",(req,res)=>{
   console.log(req.rawHeaders);
   res.send("<h1>hello world!</h1>");
});
app.get("/about",(req,res)=>{
   console.log(req.rawHeaders);
   res.send("<h1>hello world! to everyone</h1>");
});
app.get("/contact",(req,res)=>{
   console.log(req.rawHeaders);
   res.send("<h1>You can contact me through e-mail or message.</h1>");
});
app.listen(port,()=>{
console.log(`server running on port ${port}.`);
});