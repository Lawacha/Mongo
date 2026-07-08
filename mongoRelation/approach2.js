
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
      ref:'Order'
     }
   ]
}))

let getData=async()=>{
   const result=await Customer.findOne().populate('orders','name')
   console.log(result)
}

getData()