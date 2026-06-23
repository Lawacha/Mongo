const mongoose = require('mongoose')

//schema
let chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    message: {
        type: String,
        maxLength: 50
    },
    sent: {
        type: Date,

    }
})
exports.chatSchema = chatSchema

//model
let Chat = new mongoose.model('Chat', chatSchema)

module.exports = Chat

