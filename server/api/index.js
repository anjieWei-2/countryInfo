const express= require('express')
const app = express()
const cors = require("cors")
const fetchRoutes = require('./countryFetcher')
const port = process.env.PORT || 5000;

app.use(cors())
app.use('/api', fetchRoutes)
app.get('/', (req, res) => res.send('Home Page Route'));


app.listen(port, () => {console.log(`Server started on port ${port}`)})