const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    name: String,
    description: String,
    longDescription: String,
    price: String,
    discount: String,
    rating: String,
    image: String,
    updated_at: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("Product", postSchema);