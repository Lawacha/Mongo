const mongoose=require('mongoose')

main().then(()=>console.log('connected sucessfully'))
.catch((err)=>{
    console.log(err)
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mongoRelation');
}
 


const userSchema=new mongoose.Schema({
    username:String,
    email:String,
})
const postSchema=new mongoose.Schema({
    content:String,
    likes:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const User=mongoose.model('User',userSchema)
const Post=mongoose.model('Post',postSchema)

// let addPost=async()=>{
//     let user1=new User({
//         username:'ram',
//         email:'ram@gmail.com'
//     })

//     let post1=new Post({
//         content:'when there is will there is way',
//         likes:99
// })
//     post1.user=user1

//     await user1.save()
//     let res= await post1.save().populate('users')
//     console.log(res)
    
// }

// addPost()

let getData=async()=>{
    let result=await Post.findOne().populate('user')
    console.log(result)
}

getData()