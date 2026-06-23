const mongoose=require('mongoose')
const Chat=require("./models/chat")
async function main(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/messenger')
        console.log('connected successfully')
    }
    catch(err){
        console.log(err)
    }
}
main()


const chats = [
    {
        from: "alice@example.com",
        to: "bob@example.com",
        message: "Hey, how are you?",
        sent: new Date("2026-06-16T10:00:00")
    },
    {
        from: "bob@example.com",
        to: "alice@example.com",
        message: "I'm good, thanks!",
        sent: new Date("2026-06-16T10:01:30")
    },
    {
        from: "john@example.com",
        to: "alice@example.com",
        message: "Can we talk later?",
        sent: new Date("2026-06-16T11:30:00")
    },
    {
        from: "alice@example.com",
        to: "john@example.com",
        message: "Sure, no problem.",
        sent: new Date("2026-06-16T11:32:00")
    }
];
Chat.insertMany(chats).then((res)=>{console.log('sucess:',res)}).catch((err)=>{console.log(err)})