
import React from 'react';
import logo from '../img/Logo.png';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// Define a styled component for the sidebar with the background color
const StyledSidebar = styled.aside`
background-color: #F5F5F5;
height: 100%;
  position: sticky;
  top: 0;
`;

const Container = styled.div`
  height: 100vh; /* 100% of the viewport height */
  overflow: hidden; /* Hide any overflow content */
`;

const SideBar = ({ setSelectedOption }) => {
    const handleItemClick = (option) => {
        setSelectedOption(option);
    };

  return (
    <div>
    <Container>
      <StyledSidebar className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        {/* Rest of your sidebar content */}
        <a href="#" class="mx-auto">
        <img class="w-28 h-6 sm:h-9" src={logo} alt="" />
    </a>

    <div class="flex flex-col items-center mt-6 -mx-2">
        <img class="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
        <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">John Doe</h4>
        <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">john@example.com</p>
        <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">Branch: /dynamic/</p>
    </div>

    <div class="flex flex-col justify-between flex-1 mt-6">
        <nav>
        <a class="flex items-center px-4 py-2 mt-5 text-black-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-black-600 hover:text-gray-700 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
        <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
        <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
        </svg>

                <span class="mx-4 font-medium" onClick={() => handleItemClick("Dashboard")}>Dashboard</span>
            </a>

            <a class="flex items-center px-4 py-2 mt-5 text-black-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium" onClick={() => handleItemClick("UserProfile")}>Profile</span>
            </a>

            <a class="flex items-center px-4 py-2 mt-5 text-black-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer" href="#">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium">Applied Jobs</span>
            </a>

            <a class="flex items-center px-4 py-2 mt-5 text-black-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 14V4h14v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Zm7-6.507c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
            </svg>

                <span class="mx-4 font-medium" onClick={() => handleItemClick("CalendarComponent")}>Placement Calendar</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-black-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
                <path d="M11 3a2 2 0 0 1 2 2v5a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2zM3 9v1a7 7 0 0 0 14 0v-1H3z"/>
                <path fillRule="evenodd" d="M6.828 2.464a1.5 1.5 0 0 1 2.122 2.122L7.12 6.293a3.5 3.5 0 0 0 0 4.95l1.83 1.83a1.5 1.5 0 0 1-2.122 2.122l-3.536-3.536a6 6 0 0 1 0-8.485l3.536-3.536z"/>
            </svg>
            <span class="mx-4 font-medium" onClick={() => handleItemClick("InterviewBlogs")}>Interview Blogs</span>
            </a>

            <a class="flex items-center px-4 py-2 mt-5 text-black-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium" onClick={() => handleItemClick("Alumnie")}>Alumnie</span>
            </a>

            <a class="flex items-center px-4 py-2 mt-5 text-black-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
            </svg>

                <span class="mx-4 font-medium">Your Resume</span>
            </a>

            
        </nav>
    </div>
        
      </StyledSidebar>
      </Container>
    </div>
  );
}

export default SideBar;







