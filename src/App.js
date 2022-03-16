/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardGroup, Form } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import { File } from './Doc/File'



const App = () => {
  const [current, setCurrent] = useState([])
  const [results, setResults] = useState([current])
  const [date, setDate] = useState([])
  const [searchLocation, setSearchLocation] = useState([])
  const [locationsInput, setLocationsInput] = useState('')



  useEffect(() => {
    axios
      .all([
        axios.get("https://covid2019-api.herokuapp.com/v2/total"),
        axios.get("https://covid2019-api.herokuapp.com/v2/current"),
      ])
      .then(res => {
        //  setting total results
        // const locationList = res.data.results || []
        setCurrent(res[0].data.data);
        // setting results for all countries
        setResults(res[1].data.data, File);
        console.log(res[0].data.data);
        console.log(res[1].data.data);
        let date = res[0].data.dt
        console.log(date);
        setDate(res[0].data.dt);
        // setSearchLocation({ locationList: locationList })
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  console.log('File', File)
  let count = 0

  if (!results) return 'no data';
  if (!Array.isArray(results)) return 'results are not array'
  if (!File) return 'no data';
  if (!Array.isArray(File)) return 'results are not array'


  const filterLocation = results.filter(item => {
    if(item === [results.location && results.flagUrl]) {
    return item.location === searchLocation
    } else {
      return 'No data'
    }
  })
  console.log('Search', searchLocation)

  const List = (props) => {
    const filteredLocation = current.filter((el) => {
      if (props.input === '') {
        return el
      } else {
        return el.text.toLowerCase().includes(props.input)
      }
    })
  }

  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase()
    setLocationsInput(lowerCase)
  }

  onchange = (event) => {
    setSearchLocation({ search: event.target.value })
  }
  

  // const filterFunction = (location) => {
  //   return location.name.toupperCase().indexOf(searchLocation.search.toupperCase()) > -1
  // }

  // const filterLocation = ({ location }) => {
  //   return location.toLowerCase().indexOf(locationsFiltered.toLowerCase()) !== -1
  // }



  const locations = filterLocation.map((data, id) => {


    return (
      <Card
        key={data.id}
        bg="secondary"
        text="white"
        className="text-center"
        style={{ margin: "5px" }}
      >
        {File[count].country}
        <img src={File[count].flagUrl} alt="flag" />
        {count = count += 1}
        <Card.Body
        key={data.id}
        >
          <Card.Title> {data.location}</Card.Title>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Confirmed {data.confirmed}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
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
              <small>{current.location}</small>
            </Card.Title>
            <Card.Title>Confirmed</Card.Title>
            <Card.Text>{current.confirmed}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {new Date(date).toDateString()}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>
            </Card.Title>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>{current.deaths}</Card.Text>
          </Card.Body>
          <Card.Footer>
          <small>Last updated {new Date(date).toDateString()}</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>
            </Card.Title>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>{current.recovered}</Card.Text>
          </Card.Body>
          <Card.Footer>
          <small>Last updated {new Date(date).toDateString()}</small>
          </Card.Footer>
        </Card>
        <Card bg="primary" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>
            </Card.Title>
            <Card.Title>Active</Card.Title>
            <Card.Text>{current.active}</Card.Text>
          </Card.Body>
          <Card.Footer>
          <small>Last updated {new Date(date).toDateString()}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <Form>
        <Form.Group controlId="formGroupSearch">
        <ul>
        {filterLocation.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
          <Form.Control
            className="search"
            type="text" 
            placeholder="Search a country"
            onChange={inputHandler} 
            // {...filterFunction}
          />
          <p input={locationsInput} />
        </Form.Group>
      </Form>
      <CardGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: 10 }}>{locations}</CardGroup>
    </div>
  )
}

export default App