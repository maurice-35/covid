import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardGroup } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import { File } from './Doc/File'
import Search from './Search'



const App = () => {
  const [current, setCurrent] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
    axios.all([
      axios.get('https://api.apify.com/v2/key-value-stores/SmuuI0oebnTWjRTUh/records/LATEST?disableRedirect=true'),
      axios.get('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true'),
    ])
      .then(res => {
        //  setting world total results
        setCurrent(res[0].data.regionData[0]);
        // setting results for some countries
        setResults(res[1].data, File);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  let flagCount = 0
  // eslint-disable-next-line
  results.map((coun) => {
    const newResults = { ...results[flagCount], ...File[flagCount] }
    results[flagCount] = newResults
    flagCount += 1
  })

  let count = 0

  const countries = results.map((data, id) => {


    return (
      <Card
        key={id}
        bg="secondary"
        text="white"
        className="text-center"
        style={{ margin: "5px" }}
      >
        {File[count].country}
        <img src={File[count].flagUrl} alt="flag" />
        {count = count += 1}
        <Card.Body>
          <Card.Title> {data.country}</Card.Title>
          <Card.Text>Cases</Card.Text>
          <Card.Text>Infected {data.infected}</Card.Text>
          <Card.Text>Deceased {data.deceased}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Tested {data.tested}</Card.Text>
          <Card.Text><small>Last updated {new Date().toString()}</small></Card.Text>
        </Card.Body>
      </Card>
    )
  })


  return (
    <div>
      <div className="world">
        <Card.Title>
          <Card.Title></Card.Title>
          <Card.Title><img src="https://phil.cdc.gov//PHIL_Images/23312/23312_lores.jpg" alt="img" /></Card.Title>
          <Card.Title>World Covid-19 Data</Card.Title>
          <Card.Title><img src="https://phil.cdc.gov//PHIL_Images/23312/23312_lores.jpg" alt="img" /></Card.Title>
        </Card.Title>
      </div>
      <CardGroup id="background">
        <Card bg="secondary" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>World Active Cases</Card.Title>
            <Card.Text>{current.activeCases}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {new Date().toString()}</small>
          </Card.Footer>
        </Card>
        <Card bg="primary" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>
            </Card.Title>
            <Card.Title>World Total Cases</Card.Title>
            <Card.Text>{current.totalCases}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {new Date().toString()}</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>
            </Card.Title>
            <Card.Title>World Total Recovered</Card.Title>
            <Card.Text>{current.totalRecovered}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {new Date().toString()}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>
            </Card.Title>
            <Card.Title>World Total Deaths</Card.Title>
            <Card.Text>{current.totalDeaths}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {new Date().toString()}</small>
          </Card.Footer>
        </Card>

      </CardGroup>
      <Search placeholder="Search" data={results} />
      <CardGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: 10 }}>{countries}</CardGroup>
    </div>
  )
}

export default App