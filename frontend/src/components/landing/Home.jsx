import React, { Component } from 'react'
import bgimg from '../img/bg img.jpg'
import styled from 'styled-components'
import SchoolIcon from '@mui/icons-material/School';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

const Container = styled.div`
  background-color: #F8F8F8;
`
const Black = styled.div`
  color: black;
  text-align: justify;
`

const Black1 = styled.div`
  color: black;
`
const Button1 = styled.button`
    width: 130px;
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

export default class Home extends Component {
  componentDidMount() {
    // Disable scrolling on the entire page
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Re-enable scrolling when the component is unmounted
    document.body.style.overflow = 'auto';
  }
  render() {
    return (
      <Container>
        <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        
        <h1 class="text-indigo-500 text-5xl title-font font-medium mb-4">Campus Placement</h1>
        <h1 class="text-gray-900 text-3xl title-font font-small mb-2">Made Easy!</h1>
        
        <div class="flex mb-4">
          {/* <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a> */}
        </div>
        <p class="leading-relaxed mb-4"><Black>TSEC Training & Placement Cell aims at building a strong interface between Industry and the Institute for training and placement of students. To make recruitment session smoother for students, Training & Placement Cell has a web portal for handling the placements.</Black></p>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500"><Black1>Student portal for easy job application.</Black1></span>
          <span class="ml-auto text-gray-900"><Button1><SchoolIcon/>Student</Button1></span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500"><Black1>Admin portal for handling placements.</Black1></span>
          <span class="ml-auto text-gray-900"><Button1><AssuredWorkloadIcon/>T & P O</Button1></span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500"><Black1>Envoy access for smooth conduction of placements.</Black1></span>
          <span class="ml-auto text-gray-900"><Button1><ManageAccountsIcon/>Envoys</Button1></span>
        </div>
        {/* <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          
        </div> */}
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={bgimg} />
    </div>
  </div>
</section>
      </Container>
      
    )
  }
}
