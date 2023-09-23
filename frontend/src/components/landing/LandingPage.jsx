import styled from "styled-components";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Why_tsec from "./Why_tsec";
import Home from "./Home";
import OurRecruiters from "./OurRecruiters";
import Signup_Login from "./Signup_Login";
import PlacementStats from "./PlacementStats";
const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex:7
`;
const Wrapper = styled.div``;

function LandingPage() {

  return (
    <Container>
      <Menu/>

      <Main>
        <Navbar/>
        <Home/>
        <Why_tsec/>
        <Signup_Login/>
        <OurRecruiters/>
        <PlacementStats/>
      </Main>
    </Container>
  )
}

export default LandingPage
