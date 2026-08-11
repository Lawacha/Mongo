const express=require('express')
const router=express.Router()

router.get('/posts',(req,res)=>{
    res.send('get req for posts')
})

router.get('/users/:id',(req,res)=>{
    res.send('get req for id')
})

module.exports=router