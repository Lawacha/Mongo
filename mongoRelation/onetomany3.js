const { Schema, default: mongoose } = require('mongoose')
const dbconnect=require('./connect')

dbconnect().then(()=>{console.log('connected successfully')})

const iuserSchema=new Schema({
    username:String,
    email:String    
})

const ipostSchema=new Schema({
    content:String,
    likes:Number,
    iuser:{
        type:Schema.Types.ObjectId,
        ref:'Iuser'
    }
})

const Iuser=mongoose.model('Iuser',iuserSchema)
const Ipost=mongoose.model('Ipost',ipostSchema)

// const putData=async()=>{
//     let iuser=await Iuser.findOne()

//     let ipost1=await Ipost.create({
//         content:'thhis is suppreme empire',
//         likes:101,
//         iuser:iuser._id        
//     })
//     ipost1.save().then((res)=>{
//         console.log(res)
//     })
// }

// putData()


const getData=async()=>{
    let result=await Ipost.findOne().populate('iuser')
    console.log(result)
}

getData()