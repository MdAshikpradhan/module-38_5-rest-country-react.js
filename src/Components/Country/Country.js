import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home/Home.css'
import { Button, Container, Row, Col, Card} from 'react-bootstrap';

const Country = (props) => {
    const {name, email, flag} = props.country;
    return ( 
        <Container className="countryCard">

                    <Card style={{ width: '18rem' }}>
                    <Card.Img className="img" variant="top" src={flag} alt="" />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Link to={`/country/${name}`}><Button variant="warning">Show Detail</Button></Link>
                        </Card.Body>
                    </Card>

        </Container>
        
    );
};

export default Country;