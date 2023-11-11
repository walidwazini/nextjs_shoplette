const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const dataImport = require('./data-import')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5004

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT} `))
  })
  .catch((error) => console.log(`${error} did not connect`));

app.get('/', (req, res) => {
  res.send('App is running')
})

app.get('/api',(req,res) => res.json({message: 'Welcome to Shoplette API.'}))

app.use('/api/import',dataImport)
