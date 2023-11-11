const mongoose = require('mongoose')

const objectId = mongoose.Schema.Types.ObjectId

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  images:[{
    type:Object,
    require:false,
  }],
  slug:{
    type:String,
    require:false,
  },
  category: [{
    type: String
  }],
  variant: {
    title: Object,
  },
  price: {
    type: Number,
    require:false,
    default: 0
  },
  countInStock: {
    type: Number,
    require:false,
    default: 0,
  },
})

const shopSchema = mongoose.Schema({
  name: { type: String, required: true, unique:true },
  owner: {
    type: objectId,
    require: true,
    ref: 'Account'
  },
  products :[productSchema]
})

module.exports = mongoose.model('Shop',shopSchema)