import styled from "styled-components";
import Menu from "./Menu"; //comment
import Navbar from "./Navbar";
import Home from "./Home";
import Why_tsec  from "./Why_tsec";
import OurRecruiters from "./OurRecruiters";
import Signup_Login from "./Signup_Login";
import RecruitmentProcess from "./RecruitmentProcess";
import PlacementStats from "./PlacementStats";
import ForgotPassword from "./ForgotPassword";

import { Routes, Route, Outlet } from "react-router-dom";


const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex:7
`;


function LandingPage() {

  return (   
    <Container>
    <Menu/>
    <Main>
      <Navbar/>
      <Outlet />
    </Main>
  </Container> 
  )
}

export default LandingPage
