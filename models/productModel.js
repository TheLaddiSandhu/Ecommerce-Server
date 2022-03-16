const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    name: String,
    price: String,
    discount: String,
    image: String,
    description: String,
    rating: String,
    longDescription: String,
    reviews: String,
    created: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("Post", postSchema);