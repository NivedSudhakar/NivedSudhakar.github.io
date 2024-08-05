import React, { useRef } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
    const scrollRef = useRef(null);
    return (
      <div className='container'>
        <section className="section-1">
          <h1>Nived Sudhakar</h1>
          <p>Chemistry, CS, and a Gecko</p>
        </section>
        <section className="section-2">
          <h1>Education</h1>
          <CardGroup className='card-group'>
            <Card
              text={'dark'}
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>Valley Christian High School</Card.Header>
              <Card.Body>
                <Card.Title> High School Diploma </Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>4.8 GPA</ListGroup.Item>
                  <ListGroup.Item>Game Development Club</ListGroup.Item>
                  <ListGroup.Item>XPRIZE Carbon</ListGroup.Item>
                </ListGroup>
                <Card.Text>
                  Notable Courses
                  <ul>
                    <li>AP Chemistry</li>
                    <li>AP Physics 1</li>
                    <li>AP Statistics</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              text={'dark'}
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>Mission College</Card.Header>
              <Card.Body>
                <Card.Title> AS in Computer Information Systems </Card.Title>
                <Card.Title>AA in Natural Math and Sciences</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>MCE Physics Team</ListGroup.Item>
                  <ListGroup.Item>Honors Program</ListGroup.Item>
                </ListGroup>
                <Card.Text>
                Notable Courses
                  <ul>
                    <li>Data Structures with Java</li>
                    <li>Infectious Diseases Honors</li>
                    <li>Fluid Power Systems</li>
                    <li>Cancer Biology Honors</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>


          </CardGroup>
        </section>
        <section className="section-3">
          <h1>Monk</h1>
          <div>
          <Card>
            <Card.Img className='card-img' variant="top" src={require("./Monk.JPG")} />
            <Card.Body>
              <a href="https://monkgallery.web.app/" class="btn btn-primary" role="button">Visit Monk at his Website</a>

            </Card.Body>
          </Card>
          </div>

        </section>

      </div>


    );
}

export default App;
