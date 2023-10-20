import React, { useState } from 'react';

// Sample company data with multiple users
const companyData = {
    "Company A": [
        {
            user: "Anonymous User 1",
            batchYear: "2022",
            role: "Role 1"
        },
        {
            user: "Anonymous User 2",
            batchYear: "2021",
            role: "Role 2"
        },
        {
            user: "Anonymous User 3",
            batchYear: "2023",
            role: "Role 3"
        }
    ],
    "Company B": [
        {
            user: "User X",
            batchYear: "2020",
            role: "Role X"
        },
        {
            user: "User Y",
            batchYear: "2019",
            role: "Role Y"
        },
        {
            user: "User Z",
            batchYear: "2021",
            role: "Role Z"
        }
    ]
    // Add data for other companies as needed
};

function InterviewBlogs() {
    // Sample company names
    const companyNames = Object.keys(companyData);

    // State to track the selected company and user
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className="p-2 bg-gray-100 border rounded shadow-md">
            <div className="text-left">
                <h1 className="text-2xl font-bold mb-4">Interview Blogs</h1>
            </div>
            <div className="text-right space-y-2 pr-4 relative">
                <div className="flex items-center">
                    <label htmlFor="companyDropdown" className="pr-2">Select a Company:</label>
                    <select
                        id="companyDropdown"
                        className="p-2 pr-2 border rounded"
                        onChange={(e) => {
                            setSelectedCompany(e.target.value);
                            setSelectedUser(null);
                        }}
                    >
                        <option value="">Select a company</option>
                        {companyNames.map((company, index) => (
                            <option key={index} value={company}>
                                {company}
                            </option>
                        ))}
                    </select>
                </div>
                {selectedCompany && (
                    <div className="absolute top-16 left-0 right-0 bg-white border border-gray-300 p-4">
                        {companyData[selectedCompany].map((user, index) => (
                            <div
                                key={index}
                                className={`mb-4 p-2 border border-gray-400 cursor-pointer ${
                                    selectedUser === index && 'bg-blue-100'
                                }`}
                                onClick={() => setSelectedUser(index)}
                            >
                                <div className="flex justify-between">
                                    <div className="text-xl font-bold">{user.user}</div>
                                    <div className="text-right">Batch Year: {user.batchYear}</div>
                                </div>
                                <div className="text-left text-bottom">Role: {user.role}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InterviewBlogs;
