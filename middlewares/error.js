const express=require('express')

const app=express()
const port=8080

app.use((err,req,res,next)=>{
    console.log('err')
    next(err)
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})