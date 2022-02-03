import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { File } from './Doc/File';


const App = () => {
  const [current, setCurrent] = useState([]);
  const [results, setResults] = useState([]);



  useEffect(() => {
    axios
      .all([  
        axios.get("https://covid2019-api.herokuapp.com/v2/total"),
        axios.get("https://covid2019-api.herokuapp.com/v2/current"),
      ])
      .then(res => {
        //  setting total results
        setCurrent(res[0].data.data);
        // setting results for all countries
        setResults(res[1].data.data, File);
        console.log(res[0].data.data)
        console.log(res[1].data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(File)

  let count = 0

  if (!results) return 'no data';
  if (!Array.isArray(results)) return 'results are not array'
  if (!File) return 'no data';
  if (!Array.isArray(File)) return 'results are not array'


  const locations = results.map((data) => {
  

    return (
      <Card
        key={data.id}
        bg="secondary"
        text="white"
        className="text-center"
        style={{ margin: "5px" }}
      >
        {console.log(File[count].location, File[count].flagUrl)}
        <img src={File[count].flagUrl} alt="flag" />
        {count = count += 1}
        <Card.Body>
          <Card.Title>{data.location}</Card.Title>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Confirmed {data.confirmed}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
        </Card.Body>
      </Card>
    );
  });


  return (
    <div>
      <CardGroup>
        <Card bg="secondary" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>
              <small>{current.location}</small>
            </Card.Title>
            <Card.Title>Confirmed</Card.Title>
            <Card.Text>{current.confirmed}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {new Date(current.data).toDateString()}</small>
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
            <small>Last updated 3 mins ago</small>
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
            <small>Last updated 3 mins ago</small>
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
            <small>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: 10 }}>{locations}</CardGroup>
    </div>
  );
}

export default App