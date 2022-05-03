import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardGroup } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import { File } from './Doc/File'
import Search from './Search'



const App = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
        setResults(data)
      } catch (err) {
      }
    }
    getData()
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
        <Card.Body
        >
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
      <CardGroup id="background">
        <Card bg="secondary" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>
              <small>{results.location}</small>
            </Card.Title>
            <Card.Title>Infected</Card.Title>
            <Card.Text>{results.infected}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {new Date().toString()}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>
            </Card.Title>
            <Card.Title>Deceased</Card.Title>
            <Card.Text>{results.deceased}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {new Date().toString()}</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>
            </Card.Title>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>{results.recovered}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {new Date().toString()}</small>
          </Card.Footer>
        </Card>
        <Card bg="primary" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>
            </Card.Title>
            <Card.Title>Tested</Card.Title>
            <Card.Text>{results.tested}</Card.Text>
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