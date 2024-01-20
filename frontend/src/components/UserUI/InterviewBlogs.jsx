import React, { useState } from 'react';
const companyData = {
    "Infosys": [
        {
            user: "Anonymous User 1",
            batchYear: "2022",
            role: "Role 1",
            information: "Anonymous User 1 is a talented individual who joined Company A in 2022. They play a crucial role in the company, serving as Role 1. With their dedication and skills, they contribute significantly to the success of the team. Anonymous User 1 is known for their excellent problem-solving abilities and teamwork, making them an invaluable asset to the company."
        },
        
        {
            user: "Anonymous User 2",
            batchYear: "2021",
            role: "Role 2",
            information: "Additional information for User 2."
        },
        {
            user: "Anonymous User 3",
            batchYear: "2023",
            role: "Role 3",
            information: "Additional information for User 3."
        },
        {
            user: "Anonymous User 4",
            batchYear: "2022",
            role: "Role 1",
            information: "Anonymous User 1 is a talented individual who joined Company A in 2022. They play a crucial role in the company, serving as Role 1. With their dedication and skills, they contribute significantly to the success of the team. Anonymous User 1 is known for their excellent problem-solving abilities and teamwork, making them an invaluable asset to the company."
        },
        {
            user: "Anonymous User 5",
            batchYear: "2022",
            role: "Role 1",
            information: "Anonymous User 1 is a talented individual who joined Company A in 2022. They play a crucial role in the company, serving as Role 1. With their dedication and skills, they contribute significantly to the success of the team. Anonymous User 1 is known for their excellent problem-solving abilities and teamwork, making them an invaluable asset to the company."
        },
        {
            user: "Anonymous User 6",
            batchYear: "2022",
            role: "Role 1",
            information: "Anonymous User 1 is a talented individual who joined Company A in 2022. They play a crucial role in the company, serving as Role 1. With their dedication and skills, they contribute significantly to the success of the team. Anonymous User 1 is known for their excellent problem-solving abilities and teamwork, making them an invaluable asset to the company."
        },
        {
            user: "Anonymous User 1",
            batchYear: "2022",
            role: "Role 1",
            information: "Anonymous User 1 is a talented individual who joined Company A in 2022. They play a crucial role in the company, serving as Role 1. With their dedication and skills, they contribute significantly to the success of the team. Anonymous User 1 is known for their excellent problem-solving abilities and teamwork, making them an invaluable asset to the company.Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur, eveniet dolorem veniam ratione voluptatibus tenetur quae expedita, sequi voluptatum possimus praesentium odit corporis laudantium, ipsa quaerat omnis libero distinctio!"
        }
    ],
    "General Mills": [
        {
            user: "User X",
            batchYear: "2020",
            role: "Role X",
            information: "Additional information for User X.Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur, eveniet dolorem veniam ratione voluptatibus tenetur quae expedita, sequi voluptatum possimus praesentium odit corporis laudantium, ipsa quaerat omnis libero distinctio!"
        },
        {
            user: "User Y",
            batchYear: "2019",
            role: "Role Y",
            information: "Additional information for User Y."
        },
        {
            user: "User Z",
            batchYear: "2021",
            role: "Role Z",
            information: "Additional information for User Z."
        }
    ]
    // Add data for other companies as needed
};

function InterviewBlogs() {
    const companyNames = Object.keys(companyData);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [selectedUserIndex, setSelectedUserIndex] = useState(null);

    const selectUser = (index) => {
        setSelectedUserIndex(index);
    };

    return (
        <div className="p-2 bg-gray-50 border rounded shadow-md w-full">
            {/* <div className="text-left">
                <h1 className="text-3xl text-indigo-500 tracking-widest font-medium title-font mb-2">Interview Blogs</h1>
            </div> */}
            <div className="text-right space-y-2 pr-4 relative">
                <div className="flex items-center mt-4">
                    <label htmlFor="companyDropdown" className="pr-2">Select a Company:</label>
                    <select
                        id="companyDropdown"
                        className="p-2 pr-2 border rounded"
                        onChange={(e) => {
                            setSelectedCompany(e.target.value);
                            setSelectedUserIndex(null);
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
                {selectedCompany ? (
                    <div className="absolute top-16 left-0 right-0 bg-white border-gray-300 p-4 ">
                        {selectedUserIndex === null ? (
                            <div className="user-list-container" style={{ maxHeight: '500px', overflowY: 'auto',scrollbarWidth: 'thin', scrollbarColor: 'black black'  }}>
                                {companyData[selectedCompany].map((user, index) => (
                                    <div
                                        key={index}
                                        className="mb-4 p-2 border border-gray-400 cursor-pointer"
                                        onClick={() => selectUser(index)}
                                    >
                                        <div className="flex justify-between">
                                            <div className="text-xl font-bold">{user.user}</div>
                                            <div className="text-right">Batch Year: {user.batchYear}</div>
                                        </div>
                                        <div className="text-left text-bottom">Role: {user.role}</div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="mb-4 p-2 border border-gray-400 relative">
                                <div className="text-xl font-bold text-center mb-4">
                                    {companyData[selectedCompany][selectedUserIndex].user}, {companyData[selectedCompany][selectedUserIndex].batchYear} - {companyData[selectedCompany][selectedUserIndex].role}
                                </div>
                                <div className="text-justify" style={{ padding: '0 15%' }}>{companyData[selectedCompany][selectedUserIndex].information}</div>
                                <div className="text-left text-bottom">
                                    <button
                                        className="text-blue-500 cursor-pointer absolute top-0 right-0 p-2"
                                        onClick={() => selectUser(null)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center text-3xl font-bold text-gray-500">
                        Select the company you want
                    </div>
                )}
            </div>
        </div>
    );
}

export default InterviewBlogs;


