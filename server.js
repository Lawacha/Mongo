const express=require('express')
const posts=require('./posts')
const user=require('./user')
const app=express()
const cookieParser=require('cookie-parser')
const session=require('express-session')

const port=3000


app.use(session({secret:'mysecret',resave:false,saveUninitialized:true}))

app.get('/count',(req,res)=>{
    let{name='anonymous'}=req.query
    req.session.name=name
    res.send(req.session.name)    
})

app.get('/verify',(req,res)=>{
    let {name}=req.query
    res.send(`hellow, ${req.session.name}`)
})

app.listen(port,()=>{
    console.log(`listening to port: ${port}`)
})