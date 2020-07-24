import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import './apiCallData.css';

function apiCallData(props){
    return ( 
        props.eSports.map(items =>
            <div>
            <CardDeck>
              <Col>                  
              <Card style={{ width: '18rem', display: 'flex', margin: '20px',float: "left" }}>
                    <Card.Img variant="top" src={items.league.image_url} />
                      <Card.Body>
                        <Card.Title>{items.tournament.name}</Card.Title>
                        <Card.Text>
                          Time:{items.original_scheduled_at}<br />
                          Name:{items.name}<br />
                          Match:{items.match_type}<br />
                          League:{items.league.id}
                        </Card.Text>
                        Game: {items.videogame.name}<br />
                        <Button href={items.official_stream_url} variant="secondary" size="lg">
                          Stream
                        </Button>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">{items.tournament.begin_at}</small>
                      </Card.Footer>
                    </Card> 
                    <br />
              </Col>          
            </CardDeck>
            </div>

            
            )
    )
}
export default apiCallData;
