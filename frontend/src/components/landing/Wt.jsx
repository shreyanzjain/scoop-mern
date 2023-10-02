import styled from "styled-components";
import React from 'react'
import Menu from "./Menu"; //comment
import Navbar from "./Navbar";
import Why_tsec  from "./Why_tsec";
const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex:7
`;

const Wt = () => {
  return (
    <Container>
    <Menu/>
    <Main>
      <Navbar/>
      <Why_tsec />
    </Main>
  </Container> 
  )
}

export default Wt