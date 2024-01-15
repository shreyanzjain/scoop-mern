import React, { useState } from "react";

import styled from "styled-components";
import Menu from "./Menu"; //comment
import Navbar from "./Navbar";
import Home from "./Home";
import Why_tsec from "./Why_tsec";
import OurRecruiters from "./OurRecruiters";
import Signup_Login from "./Signup_Login";
import PlacementStats from "./PlacementStats";
import ForgotPassword from "./ForgotPassword";
import CollegeEnvoys from "./CollegeEnvoys";
import InterviewBlogs from "./InterviewBlogs";
import Alumnie from "./Alumnie";
import ContactUs from "./ContactUs";
import { Routes, Route, Outlet } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;

const componentsMap = {
  Home,
  Why_tsec,
  OurRecruiters,
  Signup_Login,
  PlacementStats,
  ForgotPassword,
  CollegeEnvoys,
  InterviewBlogs,
  Alumnie,
  ContactUs
}

// function LandingPage() {

//   return (
//     <Container>
//     <Menu/>
//     <Main>
//       <Navbar/>
//       <Outlet />
//     </Main>
//   </Container>
//   )
// }

// export default LandingPage

const LandingPage = () => {
  const [selectedOption, setSelectedOption] = useState("Home");

  const SelectedComponent = componentsMap[selectedOption];

  return (
    <Container>
    <Menu setSelectedOption={setSelectedOption}/>
    <Main>
      <Navbar/>
      <SelectedComponent />
    </Main>
  </Container>
  );
};

export default LandingPage;
