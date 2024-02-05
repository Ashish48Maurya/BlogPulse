const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image:{
        type:String,
        required: true,
    },
    timestamps: {
        type: Date,
        default: Date.now,
    },
});
const Post = mongoose.model("post", postSchema);
module.exports = Post;