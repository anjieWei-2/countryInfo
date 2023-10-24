import React from 'react'
import MapComponent from './MapComponent'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


function SearchResult(props){
    const { result } = props
    return(
        <>
        <Container fluid>  
            <Row className="symbols" >
                <Col md={6}>
                    <Image src={result[0].flags.png} alt={result[0].flags.alt} thumbnail style={{ maxHeight: '200px' }}/>
                    <p className="property-label">Flag</p>
                </Col>
                <Col md={6}>
                    <Image src={result[0].coatOfArms.png} thumbnail style={{ maxHeight: '200px' }}/>
                    {result[0].coatOfArms.png && <p className="property-label">Coat of arms</p>}
                </Col>
            </Row>
            <div className="names">
                <Row>
                    <Col lg={12}>
                        <h1>{result[0].name.official}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p className='property-label'>Official name</p>
                    </Col>
                </Row>
                
                <Row>
                    <Col md={6}>
                        <span className="property-label">Common name: </span>{result[0].name.common}
                    </Col>
                    <Col md={6}>
                        <span className="property-label">Alt spellings: </span> {result[0].altSpellings.map((spelling) => <span key={spelling}>{spelling} <br/> </span>)}
                    </Col>
                </Row>    
            </div>
            <Row>
                <Col md={5}>
                    <Card className="capital" style={{ maxWidth: '600px' }}>
                    <MapComponent lat={result[0].capitalInfo.latlng[0]} lng={result[0].capitalInfo.latlng[1]} capital={result[0].capital} />
                    <Card.Body>
                        <Card.Title>Capital: {result[0].capital}</Card.Title>
                            
                        <a href={result[0].maps.openStreetMaps}>Click here for country map</a>
                    </Card.Body>    
                    </Card>
                </Col>
                <Col md={7}>            
                <div className="detail">
                    <Row>
                        <Col md={6}>
                            <span className="property-label">Continents: </span> {result[0].continents}
                        </Col>
                        <Col md={6}>
                            <span className="property-label">Region: </span> {result[0].region} 
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <span className="property-label">Subregion: </span>{result[0].subregion}
                        </Col>
                        <Col md={6}>
                            <span className="property-label">Area by sq.km: </span> {result[0].area}
                        </Col>                       
                    </Row>
                    <Row>
                        <Col md={6}>
                            <span className="property-label">Population: </span> {result[0].population}
                        </Col>
                        <Col md={6}>
                            <span className="property-label">Start of week: </span> {result[0].startOfWeek.charAt(0).toUpperCase() + result[0].startOfWeek.slice(1)} 
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <span className="property-label"> Currencies: </span>{Object.keys(result[0].currencies).map((currencyCode) => 
                                <span> {Object.values(result[0].currencies[currencyCode]).join(' ')};<br/></span>)}

                        </Col>
                        <Col md={6}>
                            <span className="property-label">Lanugage(s): </span> {Object.keys(result[0].languages).map((languageCode) => 
                                <span> {result[0].languages[languageCode]};<br/> </span>)} 
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <span className="property-label">Timezone(s): </span> {result[0].timezones.join('; ') }
                        </Col>
                    </Row>
                    

                </div>
                </Col>
            </Row>

        </Container>

        </>)
}
export default SearchResult
