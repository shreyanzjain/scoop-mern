import styled from "styled-components";
import Menu from "./Menu";
import Navbar from "./Navbar";

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
        <Wrapper>
       
        </Wrapper>
      </Main>
    </Container>
  )
}

export default LandingPage
