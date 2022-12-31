const mongoose = require('mongoose');

const articlesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    upvotes: { type: Number, required: true },
    comments: { type: Array, required: false }
})

module.exports = mongoose.model('Articles', articlesSchema)