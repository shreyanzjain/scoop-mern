import styled from "styled-components";
import React from 'react'
import Menu from "./Menu"; //comment
import Navbar from "./Navbar";
import Signup_Login from "./Signup_Login";


const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex:7
`;

const SiLo = () => {
    return (
        <Container>
            <Menu />
            <Main>
                <Navbar />
                <Signup_Login />
            </Main>
        </Container>
    )
}

export default SiLo