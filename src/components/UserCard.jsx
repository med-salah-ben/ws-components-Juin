import React from 'react';
import {Card, Button} from "react-bootstrap"

const UserCard = (props) => {
    console.table(props)
  return (
    <Card className='userCard' style={{ width: '18rem',margin:"10px" }}>
  <Card.Img variant="top"src={props.user.img} />
  <Card.Body>
    <Card.Title>{props.user.name}</Card.Title>
    <Card.Text>
      {props.user.lastName}
    </Card.Text>
    <Button variant="primary"> {props.user.age} </Button>
  </Card.Body>
</Card>
  )
}

export default UserCard