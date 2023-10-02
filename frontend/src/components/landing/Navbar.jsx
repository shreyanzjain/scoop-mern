import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

import { NavLink } from 'react-router-dom';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: #F0F0F0;
  height: 56px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`
// const Search = styled.div`
//   position: absolute;
// `

const Item = styled.div`
    padding: 5px 10px 10px 10px;
`
const Input = styled.input``

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 2px solid #3E5FD0;
    color: #3E5FD0;
    border-radius: 15px;
    font-weight: bold;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`
const Button1 = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 2px solid #3E5FD0;
    color: black;
    border-radius: 15px;
    font-weight: bold;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Navbar = () => {
  return (
    <Container className="z-10">
      <Wrapper>

        <Item>
        <Button1><AutoGraphIcon/><NavLink to="/placement-cell">PL</NavLink></Button1>
        </Item>

        <Item>
        <Button1><AutoGraphIcon/><NavLink to="/user-page">UP</NavLink></Button1>
        </Item>

        <Item>
        <Button1><AutoGraphIcon/>Employers</Button1>
        </Item>

        <Item>
        <Button1><LightbulbIcon/>Learn More</Button1>
        </Item>

        <Item>
        <Button><PersonIcon/><NavLink to="/login">SIGN - IN</NavLink></Button>
        </Item>       
        
        
        
      </Wrapper>
    </Container>
  )
}

export default Navbar