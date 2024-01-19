import React from 'react'
import UserProfileNav from './UserProfileNav'
import Personal from './Personal'
import Edu from "./Edu"
import CurrentEdu from "./CurrentEdu"
import Address from "./Address"
import AdditionalInfo from "./AdditionalInfo"

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
        
        {/* <Personal /> */}
        {/* <Edu />
        <CurrentEdu />
        <Address />
        <AdditionalInfo /> */}
    </Container>
    </div>
    
  )
}

export default UserProfile