// EmployerRegistration.js

import React from 'react';

const EmployerRegistration = () => {
  return (
    <div className="flex flex-col justify-center h-screen bg-gradient-to-r from-whitesmoke-500 to-purple-500">
      <div className="bg-white p-8  text-black">
        <div className="text-center mx-auto" style={{marginTop:'-5%',marginBottom:'7%'}}> 
            <h2 className="text-4xl font-bold mb-8 ">
            To come on campus for a job, click the link below:
            </h2>
            <a
            href="https://your-google-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl font-bold text-indigo-400 hover:text-indigo-300 underline"
            >
            Employer Job Form
            </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-8">
          <div className="relative rounded-full overflow-hidden bg-whitesmoke hover:bg-indigo-100 hover:text-indigo-500">
            <svg
              className="absolute inset-0 w-full h-full text-white opacity-25"
              viewBox="0 0 30 30"
            >
              {/* <circle cx="15" cy="15" r="15" /> */}
            </svg>
            <div className="relative px-6 py-4 text-center">
              <svg
                className="w-10 h-10 text-purple-500 mx-auto mb-4"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24v-18h-24zm6.625 8.25h-4.5v-4.5h4.5v4.5zm-4.5-4.125h4.5v-3h-4.5v3zm9 7.125h-4.5v-4.5h4.5v4.5zm-4.5-4.125h4.5v-3h-4.5v3zm4.5-3h-4.5v-4.5h4.5v4.5zm-4.5-4.125h4.5v-3h-4.5v3z" />
              </svg>
              <h3 className="text-lg font-medium mt-2">Contact TPO via Mail</h3>
              <p className="text-lg mt-2">placement.officer@example.com</p>
            </div>
          </div>
          <div className="relative rounded-full overflow-hidden bg-whitesmoke hover:bg-indigo-100 hover:text-indigo-500">
            <svg
              className="absolute inset-0 w-full h-full text-white opacity-25"
              viewBox="0 0 30 30"
            >
              {/* <circle cx="15" cy="15" r="15" /> */}
            </svg>
            <div className="relative px-6 py-4 text-center">
              <svg
                className="w-6 h-6 text-purple-500 mx-auto mb-4"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 15.546c-.292 0-.567-.06-.825-.154-.466-.156-.889-.454-1.215-.855-.325-.401-.55-.892-.655-1.416-.105-.524-.053-1.056.154-1.555.207-.5.54-.925.954-1.254.415-.33.906-.546 1.454-.615C19.434 5.56 20 6.854 20 8.465c0 1.61-.566 2.905-1.654 3.745-1.088.84-2.465 1.354-4.054 1.465-1.589.11-3.175-.335-4.465-1.255-1.29-.92-2.175-2.215-2.654-3.746-.48-1.53-.33-3.12.3-4.465.63-1.34 1.715-2.455 3.154-3.155 1.438-.7 3.024-1.054 4.754-1.054"
                />
              </svg>
              <h3 className="text-lg font-medium mt-2">Contact TPO via Mobile</h3>
              <p className="text-lg mt-2">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerRegistration;
