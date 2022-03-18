const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    rating: String,
    comment: String,
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product'
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});


module.exports = mongoose.model("Review", reviewSchema);