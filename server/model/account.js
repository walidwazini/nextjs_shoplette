const mongoose = require('mongoose')

const objectId = mongoose.Schema.Types.ObjectId

const cartSchema = mongoose.Schema({
  items: [{
    type: objectId,
    ref: 'Product',
    quantity: Number,
    require: false
  }]
})

const accountSchema = mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  cart: cartSchema,
  isSeller: {
    type: Boolean,
    require: true,
    default: false,
  },
  shop: {
    type: objectId,
    ref:'Shop',
    require: false,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Account', accountSchema)