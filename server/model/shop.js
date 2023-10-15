const mongoose = require('mongoose')

const objectId = mongoose.Schema.Types.ObjectId

const shopSchema = mongoose.Schema({
  name: { type: String, required: true, unique:true },
  owner: {
    type: objectId,
    require: true,
    ref: 'Account'
  }
})

module.exports = mongoose.model('Shop',shopSchema)