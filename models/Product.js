const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: { index: { unique: true }}
    },
    sku: {
        type: String,
        required: true,
    },
    //url
    //other info
});

const Product = mongoose.model("Product", productSchema)

module.exports = Product;