const express= require('express')
const app = express()
const cors = require("cors")
const fetchRoutes = require('./countryFetcher')

app.use(cors())
app.use('/api', fetchRoutes)


app.listen(5000, () => {console.log('Server started on port 5000')})