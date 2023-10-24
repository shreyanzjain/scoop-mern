import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const alumniData = {
  1: {
    department_name: 'Computer Science',
    alumni: [
      { alumni_name: 'John Doe', Company_name: 'TechCorp', yearOfGrad: 2020, linkedin: 'https://www.linkedin.com/in/johndoe' },
      { alumni_name: 'Jane Smith', Company_name: 'Web Solutions', yearOfGrad: 2019 },
      { alumni_name: 'Mike Johnson', Company_name: 'DataTech', yearOfGrad: 2020 },
      { alumni_name: 'Mike Johnson', Company_name: 'x', yearOfGrad: 2020 },
      
      // Add more alumni as needed
    ],
  },
  2: {
    department_name: 'Information Technology',
    alumni: [
      { alumni_name: 'Varun Iyer', Company_name: 'General Mills', yearOfGrad: 2024, linkedin: 'https://www.linkedin.com/in/varun-iyer-22a43121b/' },
      { alumni_name: 'Bob Green', Company_name: 'IT Solutions', yearOfGrad: 2020 },
      // Add more alumni as needed
    ],
  },
  3: {
    department_name: 'AI & Data Science',
    alumni: [
      { alumni_name: 'Sam Williams', Company_name: 'AI Insights', yearOfGrad: 2020 },
      { alumni_name: 'Linda Wilson', Company_name: 'Data Innovations', yearOfGrad: 2020 },
      // Add more alumni as needed
    ],
  },
  // Add more departments as needed
};

const Alumnie = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [companyFilters, setCompanyFilters] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to filter alumni data based on the selected company
  const filterAlumniByCompanies = (alumni, selectedCompanies) => {
    return alumni.filter((alumnus) => selectedCompanies.includes(alumnus.Company_name));
  };
  // Effect to reset filters when the selected tab changes
  useEffect(() => {
    setCompanyFilters([]); // Reset companyFilters when the department changes
    setIsDropdownOpen(false);
  }, [selectedTab]);
  useEffect(() => {
    const allCompanyNames = alumniData[selectedTab].alumni.map((alumnus) => alumnus.Company_name);
    setCompanyFilters(allCompanyNames);
  }, [selectedTab]);

  // Combine year and company filters to get the final filtered data
  let filteredAlumni = alumniData[selectedTab].alumni;

  if (companyFilters.length > 0) {
    filteredAlumni = filterAlumniByCompanies(filteredAlumni, companyFilters);
  }

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-3xl text-indigo-500 tracking-widest font-medium title-font mb-1">Alumni List</h1>
          </div>

          <div className="flex items-center justify-center space-x-4">
            {Object.keys(alumniData).map((tab) => (
              <div
                key={tab}
                onClick={() => setSelectedTab(Number(tab))}
                className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === Number(tab) ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
              >
                {alumniData[tab].department_name}
              </div>
            ))}
          </div>

          {filteredAlumni.length > 0 ? (
            <div className="relative p-4 border-2 border-gray-200 bg-white mt-4">
              {/* Dropdown icon */}
              <div className="absolute top-0 right-0 m-4 cursor-pointer max-h-48 overflow-y-auto" onClick={toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`h-6 w-6 ${isDropdownOpen ? 'transform rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <h2 className="text-2xl font-medium mb-2">{alumniData[selectedTab].department_name} Department</h2>
              <table className="w-full text-left table-auto">
                <thead>
                  <tr>
                    <th className="py-2 px-4">srNo</th>
                    <th className="py-2 px-4">Full Name</th>
                    <th className="py-2 px-4">Company Name</th>
                    <th className="py-2 px-4">Graduation Year</th>
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

              {/* Dropdown content */}
              {isDropdownOpen && (
                <div className="absolute top-12 right-4 p-4 border-2 border-gray-200 bg-white h-36 max-h-36 overflow-y-scroll">
                  {Array.from(
                    new Set(alumniData[selectedTab].alumni.map((alumnus) => alumnus.Company_name))
                  )
                    .sort()
                    .map((company) => (
                      <label key={company} style={dropdownLabelStyle}>
                        <input
                          type="checkbox"
                          value={company}
                          checked={companyFilters.includes(company)}
                          onChange={(e) => {
                            const selectedCompany = e.target.value;
                            if (companyFilters.includes(selectedCompany)) {
                              setCompanyFilters(companyFilters.filter((c) => c !== selectedCompany));
                            } else {
                              setCompanyFilters([...companyFilters, selectedCompany]);
                            }
                          }}
                        />
                        {company}
                      </label>
                    ))}
                </div>
              )}
            </div>
          ) : (
            <p className="mt-4">No matching alumni found.</p>
          )}
          <div className="mt-4">
            <button className="flex mx-auto mt-2 text-indigo-500 border-2 border-indigo-500 py-2 px-8 focus:outline-none hover-bg-indigo-500 hover-text-white rounded text-lg">
              <NavLink to="/">Home</NavLink>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


const dropdownLabelStyle = {
  display: 'block',
  padding: '8px 16px',
  textDecoration: 'none',
  color: 'black',
};

export default Alumnie;
