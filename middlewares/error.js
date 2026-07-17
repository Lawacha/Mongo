const express=require('express')

const app=express()
const port=8080

//custom error
const checkToken=(req,res,next)=>{
    let {query}=req.query
    console.log(query)
    console.log(req.query.query)
    if(query=='access'){
        next()
    }
    else{
        throw new Error('access denied')
    }
}

app.get('/api',checkToken,(req,res)=>{
    
     res.send('hellow')
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})
