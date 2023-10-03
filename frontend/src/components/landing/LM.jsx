import styled from "styled-components";
import React from 'react'
import Menu from "./Menu"; //comment
import Navbar from "./Navbar";
import LearnMore from "./LearnMore";


const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex:7
`;

const LM = () => {
  return (
    <Container>
            <Menu />
            <Main>
                <Navbar />
                <LearnMore />
            </Main>
        </Container>
  )
}

export default LM