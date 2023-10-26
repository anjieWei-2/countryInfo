const express= require('express')
const app = express()
const cors = require("cors")
const fetchRoutes = require('./countryFetcher')
const port = process.env.PORT;
const allowedOrigins = 'https://countryinfo-client-8dcyetdck-anjie-weis-projects.vercel.app'

app.use(cors({
    origin: '*',
}))

app.use('/api', fetchRoutes)

app.listen(port, () => {console.log(`Server started on port ${port}`)})

module.exports = app