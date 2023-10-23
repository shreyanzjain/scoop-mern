import React, { useState } from 'react';
  import { NavLink } from 'react-router-dom';
  // import alumniData from './alumniData'; // Import the alumniData JSON
  const alumniData = {
    1: {
      department_name: 'Computer Science',
      alumni: [
        { alumni_name: 'John Doe', Company_name: 'TechCorp',yearOfGrad: 2020,linkedin: 'https://www.linkedin.com/in/johndoe'},
        { alumni_name: 'Jane Smith', Company_name: 'Web Solutions',yearOfGrad: 2019, },
        { alumni_name: 'Mike Johnson', Company_name: 'DataTech',yearOfGrad: 2020, }
        // Add more alumni as needed
      ]
    },
    2: {
      department_name: 'Information Technology',
      alumni: [
        { alumni_name: 'Varun Iyer', Company_name: 'General Mills',yearOfGrad: 2024,linkedin:'https://www.linkedin.com/in/varun-iyer-22a43121b/' },
        { alumni_name: 'Bob Green', Company_name: 'IT Solutions',yearOfGrad: 2020, }
        // Add more alumni as needed
      ]
    },
    3: {
      department_name: 'AI & Data Science',
      alumni: [
        { alumni_name: 'Sam Williams', Company_name: 'AI Insights' ,yearOfGrad: 2020,},
        { alumni_name: 'Linda Wilson', Company_name: 'Data Innovations',yearOfGrad: 2020, }
        // Add more alumni as needed
      ]
    },
    4: {
      department_name: 'Electrical Engineering',
      alumni: [
        { alumni_name: 'Chris Adams', Company_name: 'PowerTech',yearOfGrad: 2020, },
        { alumni_name: 'Ella Davis', Company_name: 'Energy Systems' ,yearOfGrad: 2020,}
        // Add more alumni as needed
      ]},
      
    5: {
      department_name: 'Chemical Engineering',
      alumni: [
        { alumni_name: 'Hello World', Company_name: 'PowerTech',yearOfGrad: 2020, },
        { alumni_name: 'Ella Davis', Company_name: 'Energy Systems' ,yearOfGrad: 2020,}
        // Add more alumni as needed
      ]}
    };
  
  const Alumnie = () => {
      const [selectedTab, setSelectedTab] = useState(1);
      const [companyFilter, setCompanyFilter] = useState(null);
  
      
      // Function to filter alumni data based on the selected company
      const filterAlumniByCompany = (alumni, company) => {
          return alumni.filter((alumnus) => alumnus.Company_name === company);
      };
  
      // Combine year and company filters to get the final filtered data
      let filteredAlumni = alumniData[selectedTab].alumni;
  
  
      if (companyFilter) {
          filteredAlumni = filterAlumniByCompany(filteredAlumni, companyFilter);
      }
      const uniqueYears = Array.from(new Set(alumniData[selectedTab].alumni.map((alumnus) => alumnus.yearOfGrad)));
      filteredAlumni.sort((a, b) => b.yearOfGrad - a.yearOfGrad);
      return (
          <div>
              <section className="text-gray-600 body-font">
                  <div className="container px-5 py-24 mx-auto">
                      <div className="flex flex-col text-center w-full mb-10">
                          <h1 className="text-3xl text-indigo-500 tracking-widest font-medium title-font mb-1">Alumni List</h1>
                      </div>
  
                      <div className="flex items-center justify-center space-x-4">
                          <div
                              onClick={() => setSelectedTab(1)}
                              className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 1 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
                          >
                              CS
                          </div>
                          <div
                              onClick={() => setSelectedTab(2)}
                              className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 2 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
                          >
                              IT
                          </div>
                          <div
                              onClick={() => setSelectedTab(3)}
                              className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 3 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
                          >
                              AI&DS
                          </div>
                          <div
                              onClick={() => setSelectedTab(4)}
                              className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 4? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
                          >
                              EXTC
                          </div>
                          <div
                              onClick={() => setSelectedTab(5)}
                              className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 5 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
                          >
                              Chemical
                          </div>
                          {/* Add more department tabs here */}
                      </div>

                      <div className="my-4">
                          
                          <select
                              onChange={(e) => setCompanyFilter(e.target.value)}
                              value={companyFilter || ''}
                              className="border-2 border-gray-200 p-2 ml-4"
                          >
                              <option value="">All Company List</option>
                              {/* Dynamically generate company options based on the data */}
                              {Array.from(
                                  new Set(alumniData[selectedTab].alumni.map((alumnus) => alumnus.Company_name))
                              )
                                  .sort()
                                  .map((company) => (
                                      <option key={company} value={company}>
                                          {company}
                                      </option>
                                  ))}
                            
                          </select>
                          
                      </div>
                      
                      {filteredAlumni.length > 0 ? (
                          <div className="p-4 border-2 border-gray-200 bg-white mt-4">
                              <h2 className="text-2xl font-medium mb-2">
                                  {alumniData[selectedTab].department_name} Department
                              </h2>
                              <table className="w-full text-left table-auto">
                                  <thead>
                                      <tr>
                                          <th className="py-2 px-4">srNo</th>
                                          <th className="py-2 px-4">Full Name</th>
                                          <th className="py-2 px-4">Company Name</th>
                                          <th className="py-2 px-4">GraduationYear</th>
                                          <th className="py-2 px-4">Get Profile</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {filteredAlumni.map((alumnus, index) => (
                                          <tr key={index} className="border-b border-gray-200">
                                              <td className="py-2 px-4">{index + 1}</td>
                                              <td className="py-2 px-4">{alumnus.alumni_name}</td>
                                              <td className="py-2 px-4">{alumnus.Company_name}</td>
                                              <td className="py-2 px-4">{alumnus.yearOfGrad}</td>
                                              <td className="py-2 px-4">
                                              <a
                          href={alumnus.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="text-indigo-500 border-2 border-indigo-500 py-2 px-4 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-base">
                            Get Profile
                          </button>
                        </a>
                                              </td>
                                          </tr>
                                      ))}
                                  </tbody>
                              </table>
                          </div>
                      ) : (
                          <p className="mt-4">No matching alumni found.</p>
                      )}
                     <div className="mt-4">
                      <button className="flex mx-auto mt-2 text-indigo-500 border-2 border-indigo-500 py-2 px-8 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg">
                          <NavLink to="/">Home</NavLink>
                      </button>
                      </div>
                  </div>
              </section>
          </div>
      );
  };
  
  export default Alumnie;