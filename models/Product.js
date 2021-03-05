const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: {
        type: Schema.Types.ObjectId, ref: 'Category',
        required: true
    },
    description: { type: String, required: true },
    preview: { type: String, required: true },
    color: { type: String, required: true },
    quantity: { type: Number, default: 100 }
})

module.exports = mongoose.model('Product', productSchema)