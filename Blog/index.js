const express=require('express');
const path=require("path");
const mongoose=require('mongoose');
const cookiePaser=require('cookie-parser');
const Blog=require("./model/blog");
const userRoute=require('./routes/user');
const blogRoute=require('./routes/blog')
const { checkForAuthenticationCookie } = require('./middleware/authentication');


const app=express();
const port=8000;

mongoose.connect('mongodb://127.0.0.1:27017/blog')
.then(()=>console.log("MongoDb connected"))

app.set("view engine","ejs");
app.set("views",path.resolve('./views'));

app.use(express.urlencoded({extended:false}));
app.use(cookiePaser());
app.use(checkForAuthenticationCookie('token'));
app.use(express.static(path.resolve('./public')))
app.get('/',async (req,res)=>{
    const allBlogs=await Blog.find({});
    res.render("home",{
        user: req.user,
        blogs:allBlogs,
    });
})

app.use('/user',userRoute);
app.use('/blog',blogRoute);

app.listen(port,()=> console.log(`Server Started at PORT: ${port}`))


