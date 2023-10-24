import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/SearchBar"
import SearchResult from "./components/searchResult"
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';
import './App.css'



function App() {
  const [showResults, setShowResults] = useState(false)
  const [result, setResult] = useState([])
  const [error, setError] = useState('')
  const fetchData = async(country)=>{
    try {
        const response = await axios.get(`http://localhost:5000/api/country-info?country=${country}`) 
        setResult(response.data.results)
    }catch (error) {
        console.error('Error fetching data:', error)
        setError('Failed to fetch data. Maybe there is a typo?');
    }
  }
  const handleSearch = (country) => {
    if (country){
      fetchData(country)
      setShowResults(true)
    }
  }

  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError('');
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  return (
    <>
    {showResults == false && <h1>Which country do you want to know about?</h1>}
    <div className="searchBar">
      <SearchBar onSearch={handleSearch}/>
    </div>

    <>      
      {error?(<Alert variant='warning'>{error}</Alert>):
      showResults && Object.keys(result).length==1 && <div className="result"> <SearchResult result={result}/></div>}
    </>
                         

  </>
  )
}

export default App
