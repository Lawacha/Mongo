
const mongoose = require('mongoose');

main()
.then(()=>{console.log('connected successfully')})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mongoRelation');
}

const User=mongoose.model('User',({
    username:String,
    address:[{
        _id:false,
        location:String,
        city:String
    }]
}))

let addUser=async()=>{
    let user1=new User({
        username:'supp',
        address:{location:'chundevi',city:'bkt'}
    }).save().then((res)=>{console.log(res)})
}

addUser()