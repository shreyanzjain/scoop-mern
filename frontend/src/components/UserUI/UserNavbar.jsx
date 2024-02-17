import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person';
import BugReportIcon from '@mui/icons-material/BugReport';

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
    border: 2px solid #3E5FD0;
    color: #3E5FD0;
    border-radius: 15px;
    font-weight: bold;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
      background-color: #3E5FD0; /* Change the background color on hover */
      color: white; /* Change the text color on hover */
    }
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

    &:hover {
      background-color: #3E5FD0; /* Change the background color on hover */
      color: white; /* Change the text color on hover */
    }
`

const UserNavbar = () => {
  return (
    <Container>
      <Wrapper>
        <Item>
        <Button1><BugReportIcon/>Report Issue</Button1>
        </Item>

        <Item>
        <Button><PersonIcon/>Sign Out</Button>
        </Item>       
        
        
        
      </Wrapper>
    </Container>
  )
}

export default UserNavbar