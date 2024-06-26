import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

import { NavLink } from 'react-router-dom';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: #f4f2f3;
  height: 56px;
`;
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
  border: 2px solid #3e5fd0;
  color: #3e5fd0;
  border-radius: 15px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(62, 95, 208, 0.5);
  }
`;
const Button1 = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 2px solid #3e5fd0;
  color: black;
  border-radius: 15px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(62, 95, 208, 0.5);
  }
`;

const Navbar = ({ setSelectedOptioon }) => {
  const handleItemClick = (option) => {
    setSelectedOptioon(option);
  };

  return (
    <Container className="z-10">
      <Wrapper>
        <Item>
          <Button1>
            <NavLink to="/placement-cell">Placement Cell</NavLink>
          </Button1>
        </Item>

        <Item>
          <Button1>
            <NavLink to="/user-page">Students</NavLink>
          </Button1>
        </Item>

        {/* <Item>
          <Button1>
            <NavLink to="/calendar">Cal</NavLink>
          </Button1>
        </Item> */}

        <Item onClick={() => handleItemClick("EmployerRegistration")}>
          <Button1>
            <AutoGraphIcon />
            Employers
          </Button1>
        </Item>

        <Item onClick={() => handleItemClick("LearnMore")}>
          <Button1>
            <LightbulbIcon />
            Learn More
          </Button1>
        </Item>

        <Item onClick={() => handleItemClick("Signup_Login")}>
          <Button>
            <PersonIcon />
            SIGN - IN
          </Button>
        </Item>
      </Wrapper>
    </Container>
  );
}

export default Navbar