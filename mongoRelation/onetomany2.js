const mongoose=require('mongoose')

const dbconnect=require('./connect')

dbconnect().then(()=>{console.log('connected successfully')})

const OrderSchema=mongoose.Schema({
    name:String,
    price:Number
})

const UserSchema=mongoose.Schema({
    name:String,
    orders:[
        {type:mongoose.Types.ObjectId,
            ref:'Order'
        }
    ]
})

const Order=new mongoose.model('Order',OrderSchema)
const User=new mongoose.model('User',UserSchema)


async function insertData() {
     const orders = await Order.find()
 const user1=await new User({
    name:'supp',
    orders:[
        orders[0]._id,
        orders[2]._id,
        orders[3]._id
    ]
 })
    let result=await user1.save()
 console.log(result)
}

insertData()