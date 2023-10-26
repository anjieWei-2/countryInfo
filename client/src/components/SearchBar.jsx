import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
const serverUrl = 'https://country-info-server.vercel.app'

function SearchBar(props) {
    const [country, setCountry] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            if (country){
                fetchData();
            }
        }, 300)
        return () => clearTimeout(debounceTimeout)
    }, [country])

    function handleChange(event){
        const inputValue = event.target.value
        setCountry(inputValue.toLowerCase())
    }

    const fetchData = async()=>{
        try {
            const response = await axios.get(`${serverUrl}/api/country-list?country=${country}`) 
            setResults(response.data.results)
        }catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    const handleSearch = () =>{
        props.onSearch(country)
    }


  return (  
    <Stack direction="horizontal" gap={3} className='d-flex justify-content-center searchBar' >
        <input type="text" list="countryInput" placeholder='Ireland, United Kingdom...' onChange={handleChange}/>
        <datalist name="" id="countryInput">
        {results.map((result)=>(
            <option key={result.id} value={result.name.common} >
                {JSON.stringify(result.name.common).replace(/"([^"]+)"/, '$1')}
            </option>
        ))}
        </datalist>
        <Button variant="primary" onClick={handleSearch}>Search</Button>
    </Stack>
)}

export default SearchBar
