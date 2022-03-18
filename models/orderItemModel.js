const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Order'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product'
    },
    quantity: String,
    updated_at: {
        type: Date,
        default: Date.now,
    },
});


module.exports = mongoose.model("OrderItem", orderItemSchema);