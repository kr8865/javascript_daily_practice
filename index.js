const express=require('express');
const app=express();
const path=require('path');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded( {extended: true}));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));// 

const blogs=[
    {
        id:1,
        name:"kratika",
        comment:"hi this is y first comment"

    },
    {
        id:2,
        name:"krishna ji",
        comment:"aj toh mera happy vala bday h"
    },
    {
        id:3,
        name:"renu agarwal",
        comment:"haye mein toh chamak uthi "
    },
    {
        id:4,
        name:"sarika agrawal",
        comment:"juice pila do mausami ka"
    }
]

app.get("/blogs",(req,res)=>{
    res.render('blogs.ejs',{blogs:blogs});

})
app.get("/blog/new",(req,res)=>{
   res.render('new.ejs');
})

app.post("/blogs",(req,res)=>{
    let {username ,comment}=req.body;
    blogs.push({ id:blogs.length,name:username,comment:comment});
    res.redirect('/blogs');
})
app.get('/blog/:id',(req,res)=>{
    let id=parseInt(req.params.id);
    let foundblog=blogs.find((blog)=>{
        return blog.id==id;

    })
    res.render('show.ejs',{foundblog});

})










app.get("/",(req,res)=>{
    res.send("this is a home page");
})



const port=8080;
app.listen(port,()=>{
    console.log("connected to port");
})