const express=require('express')
const posts=require('./posts')
const user=require('./user')
const app=express()

const port=8080

app.use('/',user)
app.use('/',posts)

app.listen(port,()=>{
    console.log(`listening to port: ${port}`)
})