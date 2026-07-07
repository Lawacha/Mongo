const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const Chat = require('./models/chat.js')
const methodOverride = require('method-override')
const ExpressError=require('./ExpressError.js')

//express connection
const app = express()
const port = 8080

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//mongoose connnection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/messenger')
        console.log('connected successfully')
    }
    catch (err) {
        console.log(err)
    }
}
main()

//home
app.get('/chats', async (req, res) => {
    let chats = await Chat.find({})
    res.render('chats.ejs', { chats })
})

//new
app.get('/chats/new', (req, res) => {
    res.render('new.ejs')
})
app.post('/chats', async (req, res,next) => {
 try{
       let { from, to, message, sent } = req.body;
    await new Chat({
        from: from,
        to: to,
        message: message,
        sent: sent
    }).save()
    res.redirect('/chats')
 }
 catch(err){
    next(err)
 }

})

//edit
app.get('/chats/:id/edit', async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id)
    res.render('edit.ejs', { chat })
})
app.put('/chats/:id', async (req, res) => {
    let { id } = req.params;
    let { message: updateMsg } = req.body
    await Chat.findByIdAndUpdate(id, { message: updateMsg }, { returnDocument: 'after' })

    res.redirect('/chats')
})

//delete
app.delete('/chats/:id',async(req,res)=>{
    let {id}=req.params
    await Chat.findByIdAndDelete(id)
    res.redirect('/chats')
})

//show 
app.get('/chats/:id',async(req,res)=>{
    let {id}=req.params
    let chat=await Chat.findById(id)
    if(!chat){
        throw new ExpressError(404,'error occured')
    
    }
    res.render('show.ejs',{chat})
})

function validationErr(err) {
    err.status = 400;
    err.message = "Please provide valid data.";
    return err;
}
function CastError(err) {
    err.status = 400;
    err.message = "typecast error: there is problem type casting";
    return err;
}

//mongoose error
app.use((err,req,res,next)=>{
    console.log(err.name)
    if(err.name==='ValidationError'){
        err=validationErr(err)
    }
    else if(err.name==='CastError'){
        err=CastError(err)
    }
    next(err)
})

app.use((err,req,res,next)=>{
    let {status=500,message='error occured'}=err
    console.log(err.message)
    res.status(status).send(message)
})

//sql relationships 
//one to one
//one to many
//many to one

app.listen(port, () => {
    console.log(`listening to port:${port}`)
})