import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [current, setCurrent] = useState([])


  useEffect(() => {
    axios
      .get("https://covid2019-api.herokuapp.com/v2/current")
      .then(res => {
        setCurrent(res.data.data[0]);
        // console.log(res.data.data[0])
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <CardGroup>
        <Card bg="secondary" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>Confirmed</Card.Title>
            <Card.Text>{current.confirmed}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>50 </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>100 </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="primary" text="white" className="text-center" style={{ margin: "5px" }}>
          <Card.Body>
            <Card.Title>Active</Card.Title>
            <Card.Text>{current.active}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default App