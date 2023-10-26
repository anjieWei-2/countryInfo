const express= require('express')
const app = express()
const cors = require("cors")
const fetchRoutes = require('./countryFetcher')
const port = process.env.PORT || 3000;

app.use(cors())
app.use('/api', fetchRoutes)


app.listen(port, () => {console.log('Server started on port 5000')})