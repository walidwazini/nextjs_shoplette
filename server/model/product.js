const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  images:[{
    type:Object,
    require:false,
  }],
  category: [{
    type: String
  }],
  variant: {
    title: Object,
  },
  price: {
    type: Number,
    default: 0
  },
  countInStock: {
    type: Number,
    default: 0,
  },
  shop:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Shop',
    // require: false
  }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product