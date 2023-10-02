import React from 'react'
import UserSideBar from './UserSideBar'
import UserNavbar from './UserNavbar'
import styled from "styled-components";
import Dashboard from "../Dashboard/Dashboard.jsx"
import UserProfile from './UserProfile';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex:7
`;

const Wrapper = styled.div``;
const UserUI = () => {
  return (
    <Container>
      <UserSideBar />
      <Main>
        <UserNavbar />
        <Dashboard />
        {/* <UserProfile /> */}
      </Main>
    </Container>
    
  )
}

export default UserUI