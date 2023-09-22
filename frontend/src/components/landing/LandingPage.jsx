import styled from "styled-components";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Home from "./Home";

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
      </Main>
    </Container>
  )
}

export default LandingPage
