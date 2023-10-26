const express= require('express')
const app = express()
const cors = require("cors")
const fetchRoutes = require('./countryFetcher')
const port = process.env.PORT || 5000;
const allowedOrigins = 'https://country-info-eta-sage.vercel.app/'

app.use(cors({
    origin: allowedOrigins,
}))
app.get('/',(req,res)=>{
    res.send('hi')
})
app.use('/api', fetchRoutes)

app.listen(port, () => {console.log(`Server started on port ${port}`)})

module.exports = app