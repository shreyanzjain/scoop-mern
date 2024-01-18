import React from 'react';
import styled from 'styled-components';

const Justify = styled.div`
  text-align: justify;
  text-justify: inter-word;
`;

const BannerContainer = styled.div`
  color: #f0f0f0;
  padding: 20px;
  text-align: center;
  display: flex;
  border-radius: 8px;
  animation: moveBanner 10s linear infinite;
  position: fixed;
  top: 75px;
  z-index: 1;
  overflow: hidden;

  @keyframes moveBanner {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

const DepartmentContainer = styled.div`
  text-align: center;
  flex-grow: 1;
  border: 2px solid #fff;
  padding: 15px;
  margin-right: 20px; /* Adjusted margin for better spacing */
  border-radius: 8px;
  background-color: #6366f1;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* Updated to column direction */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */

  &:last-child {
    margin-right: 0; /* No margin for the last department container */
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 50px; /* Adjust the left margin as needed */
    margin-right: 50px;
  }

  p {
    margin: 0; /* Remove default paragraph margin */
    font-size: 18px; /* Adjusted font size for better readability */
  }
`;



const TopSalariesBanner = () => {
  return (
    <BannerContainer>
      <DepartmentContainer>
      <div className='text-container'>
          <p>CS</p>
          <p>Top Salary</p>
        </div>
      </DepartmentContainer>
      <DepartmentContainer>
      <div className='text-container'>
          <p>IT</p>
          <p>Top Salary</p>
        </div>
      </DepartmentContainer>
      <DepartmentContainer>
      <div className='text-container'>
          <p>AI-DS</p>
          <p>Top Salary</p>
        </div>
      </DepartmentContainer>
      <DepartmentContainer>
      <div className='text-container'>
          <p>EXTC</p>
          <p>Top Salary</p>
        </div>
      </DepartmentContainer>
      <DepartmentContainer>
      <div className='text-container'>
          <p>CHEMICAL</p>
          <p>Top Salary</p>
        </div>
      </DepartmentContainer>
    </BannerContainer>
  );
};
const Why_tsec = () => {
  document.body.style.overflow = 'hidden';
  return (
    <div style={{ marginTop: '60px', overflow: 'hidden' }}>
    <section class="text-gray-600 body-font">
  <TopSalariesBanner />
  
  <div class="container px-5 py-24 mx-auto" >
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-indigo-500 mb-4">TSEC At a Glance</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        <Justify>
        Established in 1983, Thadomal Shahani Engineering College (TSEC), founded by Hyderabad (Sind) National Collegiate Board, is recognized by Government of Maharashtra, approved by All India Council for Technical Education (AICTE) and Affiliated to University of Mumbai. 
        </Justify>
      </p>
    </div>
    
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Approved by AICTE</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Affiliated to University of Mumbai</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Accredited by NBA</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Recognized by Government of Maharashtra</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Well-equipped laboratories with cutting-edge instruments.</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">High competency in coding and Hackathon.</span>
        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Home</button>
  </div>
</section>
</div>
  )
}

export default Why_tsec