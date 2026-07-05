const express=require('express')
const ExpressError=require('./ExpressError')

const app=express()
const port=8080

const checkToken=(req,res,next)=>{
    let {token}=req.query
    if(!token){
        throw new Error('no token provided')
    }
    if(token=='access'){
       return next()
    }
    else {
        throw new ExpressError(401,'access denied')
    }
}

app.get('/api',checkToken,(req,res)=>{
    res.send('data')
})

app.get('/err',(req,res)=>{
    abc=abc
})

app.use((err,req,res,next)=>{
    let {status,message='err occured'}=err
    res.send(message)
})


app.listen(port,()=>{
    console.log(`listening to port: ${port}`)
})
