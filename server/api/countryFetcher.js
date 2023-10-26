const fetch = require("node-fetch");
const express = require('express');
const router = express.Router();

router.get('/country-list', async (req, res) => {
    console.log('Request received at /api/country-list');
    try {
        const country = req.query.country;
        if (!country) {
            return res.status(400).json({ error: 'Country parameter is missing.' });
        }
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
            if (!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json()
            const results = json.filter((countryList)=>{
                    return (
                        country &&
                        countryList &&
                        countryList.name &&
                        countryList.name.common.toLowerCase().includes(country)
                    )
            })
            res.json({results})
    }catch(error){
        console.error('Error:', error)
        res.status(500).json({ error: 'An error occurred while fetching and parsing the JSON data.' })
    }
})

router.get('/country-info', async (req, res) => {
    console.log('Request received at /api/country-info');
    try {
        const country = req.query.country;
        if (!country) {
            return res.status(400).json({ error: 'Country parameter is missing.' });
        }
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
            if (!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json()
            const results = json.filter((countryList)=>{
                    return (
                        country &&
                        countryList &&
                        countryList.name &&
                        countryList.name.common.toLowerCase().includes(country)
                    )
            })
            res.json({results})
    }catch(error){
        console.error('Error:', error)
        res.status(500).json({ error: 'An error occurred while fetching and parsing the JSON data.' })
    }
})

module.exports = router