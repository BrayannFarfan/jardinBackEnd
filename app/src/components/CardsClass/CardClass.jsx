import React from 'react';
import { Card } from 'react-bootstrap';

export const CardClass = ({titles,descriptions}) => {
    
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{titles}</Card.Title>
                <Card.Text>{descriptions}</Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}
