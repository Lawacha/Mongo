const mongoose=require('mongoose')
const connectDB=require('./connect')


connectDB().then(()=>{console.log('connected successfully')})

const userSchema=new mongoose.Schema({
    name:String,
    post:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }]
})

userSchema.post("findOneAndDelete",async(user)=>{
    let res= await Post.deleteMany({_id:{$in:user.post}})
    console.log(res)
})

const postSchema=new mongoose.Schema({
    content:String,

})

const User=mongoose.model('User',userSchema)
const Post=mongoose.model('Post',postSchema)

//handling deletion using mongoose middlewares
const deleteData=async()=>{
    let delUser=await User.findByIdAndDelete('6a71ef3ab8844e8c7db550f8')
    console.log(delUser)
}

deleteData()