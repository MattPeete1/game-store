const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishSchema = new Schema({
    text: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true
});

module.exports = mongoose.model('Wish', wishSchema)