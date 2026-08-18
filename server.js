const express=require('express')
const posts=require('./posts')
const user=require('./user')
const app=express()
const cookieParser=require('cookie-parser')
const session=require('express-session')

const port=3000

app.get('/getCookie',(req,res)=>{
    res.cookie('name','supp')
    res.send('name')
})

app.use(session({secret:'mysecret'}))

app.get('/verify',(req,res)=>{
    res.send('hellow')
})

app.listen(port,()=>{
    console.log(`listening to port: ${port}`)
})