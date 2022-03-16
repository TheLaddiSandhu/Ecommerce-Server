const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema({
    quantity: String,
    updated_at: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("OrderItem", orderItemSchema);