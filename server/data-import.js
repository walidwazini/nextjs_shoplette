const express = require('express')


const Account = require('./model/account')
const Shop = require('./model/shop')
const Product = require('./model/product')
const DummyAccounts = require('./data/Account')
const DummyShops = require('./data/Shop')
const DummyProducts = require('./data/Products')

const dataImport = express.Router()

dataImport.post('/account', async (req, res) => {
  try {
    await Account.insertMany(DummyAccounts)
    res.send({ message: 'success' })
  } catch (error) {
    console.log({ message: error })
  }
})


module.exports = dataImport