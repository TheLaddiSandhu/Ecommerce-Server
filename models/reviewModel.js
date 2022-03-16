const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    rating: String,
    comment: String,
    created: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("Review", reviewSchema);