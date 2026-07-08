
const mongoose = require('mongoose');

main()
.then(()=>{console.log('connected successfully')})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mongoRelation');
}

//one to many relation
const Order=mongoose.model('Order',({
   name:String,
   price:Number
}))
const Customer=mongoose.model('Customer',({
   name:String,
   orders:[
     { type:mongoose.Schema.Types.ObjectId,
      ref:Order
     }
   ]
}))

let addUser=async()=>{
   let cust1= await Customer.insertOne(
      {
         name:'ram',
      }
    )
    let order1=await Order.findOne({name:'samosa'})
    let order2=await Order.findOne({name:'chana'})

    cust1.orders.push(order1)
    cust1.orders.push(order2)
    let result=await cust1.save()
    console.log(cust1)
}

addUser()