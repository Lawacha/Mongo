const mongoose=require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
}
main()
.then(()=>{console.log('connection successful')})
.catch((err)=>{console.log(err)})

//mongo schema
let userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

//mongo model(collection)
let User=new mongoose.model('User',userSchema)

// //insert 
// let User1=new User({
//     name:'supp',
//     email:'supreme@gmail.com',
//     age:19
// })
// User1.save().then((res)=>{
//     console.log(res)
// })

// User.insertMany([
//     {name :'ram',email:'ram@gmail',age:11},
//  {name :'shyam',email:'shyam@gmail',age:11}])

 User.deleteMany({
    name:'shyam'
 }).then(()=>{console.log('deleted')})

 User.findByIdAndUpdate('6a30f67428e5b494bff84562',{$set:{name:'ravan',age:99}}).then(()=>{ User.find({}).then((res)=>console.log(res))})

// User.updateMany({age:{$gt:1}},{name:"baby"}).then(()=>{User.find({}).then((res)=>{console.log(res)})})

User.deleteOne({name:'baby'}).then((res)=>{console.log(res)})