import React from 'react'
import { Data } from '../Data'
import UserCard from './UserCard'
import UserOne from './UserOne'
import UserTwo from './UserTwo'

const UserList = () => {
  return (
    <>
    <h1 style={{textAlign:"center",marginTop:"2rem",color:"white"}}>Welcome this is my users list</h1>
  
    <div style={{display:"flex " ,justifyContent:"space-around" ,marginTop:"10rem" ,flexWrap:"wrap"}}>
    <UserOne />
    <UserTwo />
         {Data.map((el)=>(
            <UserCard user={el} key={el.id} />
         )) }
    </div>
    </>
  )
}

export default UserList