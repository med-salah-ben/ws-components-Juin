import React from 'react';
import {Card, Button} from "react-bootstrap"

const UserTwo = () => {
  return (
    <Card className='userCard' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*wFuoaESuck8qKj3KXbPdfQ.jpeg" />
  <Card.Body>
    <Card.Title>Sabrine</Card.Title>
    <Card.Text>
      Hirg
    </Card.Text>
    <Button variant="primary"> 25 </Button>
  </Card.Body>
</Card>
  )
}

export default UserTwo