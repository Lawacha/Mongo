const express=require('express')
const { now } = require('mongoose')

const app=express()
const port=8080

// //Create a middleware that prints:HTTP method,URL
// app.use((req,res,next)=>{
//      let now=new Date()
//     console.log(req.method)
//     console.log(req.url)
//     console.log(now.toString().split(' ').slice(0,5).join('-'))
//     next()
// })

// //Create a middleware that adds a new property to req and use it in a route.
app.use((req,res,next)=>{
    req.user={
        name:'supp',
        id:101,
        desc:'this is supreme boss'
    }
    next()
})

// //Create a middleware that counts how many requests your server receives.
// let count=0;
// app.use((req,res,next)=>{
//     count++
//     req.count=count;
//     next()
// })//when server restarts, count is started from 0 so use data base to store it permanently

// //Create a middleware that blocks access to a route if a condition is false.
// app.use((req,res,next)=>{
//     let {access}=req.query
//     if(access=='pass'){
//     next()}
//     else{
//        return res.send('not access')
//     }
// })

// //Create a middleware that only allows requests from a specific HTTP method (GET/POST/etc).
// app.use((req,res,next)=>{
//     if(req.method!=='GET'){
//       return res.send('not get req')
//     }
//     else{
//         next()
//     }
// })

//Create a middleware that checks if a user is logged in before accessing /profile.
 function authenticatUser(req,res,next){
    if(!req.user){
        throw new Error('user not logged in')
    }
else{
    next()
}
}

app.get('/profile',authenticatUser,(req,res)=>{
    res.send('profile')
})

app.get('/login',(req,res)=>{
    res.send(`${req.method},${req.url},${req.user.name},${req.count}`)
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})
