const express=require('express')
const router=express.Router()

router.get('/users',(req,res)=>{
    res.send('get req for users')
})

router.get('/users/:id',(req,res)=>{
    res.send('get req for id')
})

module.exports=router


