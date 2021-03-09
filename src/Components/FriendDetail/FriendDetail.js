import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Container, ListGroupItem, ListGroup, Card} from 'react-bootstrap';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState([]);
    const {name, capital, region, subregion, population, demonym, area, alpha2Code, flag} = country;
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, []);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                    <Card.Title>Country Name:{name} ({alpha2Code})</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Region: {region}</ListGroupItem>
                    <ListGroupItem>Subregion: {subregion}</ListGroupItem>
                    <ListGroupItem>Capital: {capital}</ListGroupItem>
                    <ListGroupItem>Population: {population}</ListGroupItem>
                    <ListGroupItem>Demonym: {demonym}</ListGroupItem>
                    <ListGroupItem>Area: {area}</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};

export default CountryDetail;