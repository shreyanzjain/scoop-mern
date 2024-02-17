import React from 'react'
import styled from 'styled-components'
import vTube from '../img/half_logo.png'
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import GroupsIcon from '@mui/icons-material/Groups';
import BarChartIcon from '@mui/icons-material/BarChart';
import BusinessIcon from '@mui/icons-material/Business';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';

const Container = styled.div`
  flex: 1;
  background-color: #f4f2f3;
  height: 100vh;
  color: black;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
    padding: 5px 5px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0px;
    margin-bottom: 25px;
    font-weight: 900;
    font-size: 35px;
`

const Img = styled.img`
    height: 50px;
    padding: 0px 10px;
    
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin: 0px 10px;
  padding: 7.5px 0px;
  transition: background-color 0.2s, border-radius 0.2s;

  &:hover {
    background-color: #d3b88c;
    border-radius: 10px;
  }
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid #2c2f33;
`

const Login = styled.div`
    margin-left: 10px;
`

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
const Menu = ({ setSelectedOption }) => {

    const handleItemClick = (option) => {
        setSelectedOption(option);
    };

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={vTube} />
          Scoop
        </Logo>

        <Item>
          <span onClick={() => handleItemClick("Home")}>
            <HomeIcon />
          </span>
          <span onClick={() => handleItemClick("Home")}>Home</span>
        </Item>

        <Item>
          <span onClick={() => handleItemClick("Why_tsec")}>
            <HelpIcon />
          </span>

          <span onClick={() => handleItemClick("Why_tsec")}>About TSEC</span>
        </Item>

        <Hr />

        <Login>
          Sign In to use the placement portal.
          <Button>
            <span onClick={() => handleItemClick("Signup_Login")}>
              <PersonIcon />
            </span>
            <span onClick={() => handleItemClick("Signup_Login")}>
              SIGN - IN
            </span>
          </Button>
        </Login>

        <Hr />

        <Item>
          <span onClick={() => handleItemClick("CollegeEnvoys")}>
            <GroupsIcon />
          </span>
          <span onClick={() => handleItemClick("CollegeEnvoys")}>
            Placement Department
          </span>
        </Item>

        <Item>
          <span onClick={() => handleItemClick("PlacementStats")}>
            <BarChartIcon />
          </span>
          <span onClick={() => handleItemClick("PlacementStats")}>
            Placement Statistics
          </span>
        </Item>

        <Hr />

        <Item>
          <span onClick={() => handleItemClick("OurRecruiters")}>
            <BusinessIcon />
          </span>
          <span onClick={() => handleItemClick("OurRecruiters")}>
            Our Recruiters
          </span>
        </Item>

        <Item>
          <span onClick={() => handleItemClick("ContactUs")}>
            <CallIcon />
          </span>
          <span onClick={() => handleItemClick("ContactUs")}>Contact Us</span>
        </Item>
      </Wrapper>
    </Container>
  );
}

export default Menu


