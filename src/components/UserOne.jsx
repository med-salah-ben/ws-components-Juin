import React from 'react';
import {Card, Button} from "react-bootstrap"

const UserOne = () => {
  return (
    <Card className='userCard' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" />
  <Card.Body>
    <Card.Title> SLH </Card.Title>
    <Card.Text>
        BA
    </Card.Text>
    <Button variant="primary"> 27 </Button>
  </Card.Body>
</Card>
  )
}

export default UserOne