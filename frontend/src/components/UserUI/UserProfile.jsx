import React from 'react'
import UserProfileNav from './UserProfileNav'
import Personal from './Personal'
import styled from 'styled-components'

const Container = styled.div`
display: flex; /* Use flexbox */
flex-direction: column; /* Stack the children vertically */
align-items: center; /* Center children horizontally */
margin-top: 50px;
    
`
const UserProfile = () => {
  return (
    <div>
        <UserProfileNav />
    <Container>
        
        <Personal />
    </Container>
    </div>
    
  )
}

export default UserProfile