const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issuesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upvote: {
        type: Boolean
    },
    votes: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Issues", issuesSchema)