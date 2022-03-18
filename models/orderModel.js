const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    products: Array,
    sub_total: String,
    tax_amount: String,
    status: String,
    updated_at: {
        type: Date,
        default: Date.now,
    },
});


module.exports = mongoose.model("Order", orderSchema);