const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema({
    quantity: String,
    created: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("OrderItem", orderItemSchema);