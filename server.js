const express=require('express')
const posts=require('./posts')
const user=require('./user')
const app=express()
const cookieParser=require('cookie-parser')

const port=3000

app.use(cookieParser('secretcode'));

app.get('/',(req,res)=>{
   
    console.log(req.cookies)
    res.send(`hellow `)
})


app.get('/cookies',(req,res)=>{
    res.cookie('color',"red",{signed:true});
    res.send('cookie sent')
})

app.get('/verify',(req,res)=>{
    res.send(req.signedCookies)
})

app.use('/',user)
app.use('/',posts)

app.listen(port,()=>{
    console.log(`listening to port: ${port}`)
})