const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    sub_total: String,
    tax_amount: String,
    status: String,
    created: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("Order", orderSchema);