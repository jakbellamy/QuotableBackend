import mongoose from 'mongoose'
var ObjectId = require('mongodb').ObjectID
const Schema = mongoose.Schema

const WinCardSchema = new Schema({
    imgUrl: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        required: true
    }
})

export const WinCard = mongoose.model('WinCard', WinCardSchema)