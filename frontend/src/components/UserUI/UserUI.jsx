import React,{useState} from 'react'
import UserSideBar from './UserSideBar'
import UserNavbar from './UserNavbar'
import styled from "styled-components";
import Dashboard from "../Dashboard/Dashboard.jsx"
import UserProfile from './UserProfile';
import { Outlet } from 'react-router-dom';
import CalendarComponent from '../Calendar/Calendar';
import InterviewBlogs from './InterviewBlogs.jsx';
const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex:7
`;

const componentsMap = {
  Dashboard,
  UserProfile,
  CalendarComponent,
  InterviewBlogs
}
const Wrapper = styled.div``;
const UserUI = () => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  const SelectedComponent = componentsMap[selectedOption];
  return (
    <Container>
      <UserSideBar setSelectedOption={setSelectedOption}/>
      <Main>
        <UserNavbar/>
        <SelectedComponent />
      </Main>
    </Container>
    
  )
}

export default UserUI

