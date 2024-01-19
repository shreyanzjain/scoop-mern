import React, { useState } from "react";
import styled from "styled-components";

import Personal from "./Personal";
import Education from "./Edu";
import CurrentEducation from "./CurrentEdu";
import Address from "./Address";
import AdditionalInfo from "./AdditionalInfo";

const Container = styled.div`
  background-color: #f8f8f8;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 12px;
  margin-right: 8px;
  border: 1px solid #ddd;
  border-bottom: ${({ selected }) => (selected ? "none" : "1px solid #ddd")};
  background-color: ${({ selected }) => (selected ? "#f0f0f0" : "#f8f8f8")};
  color: ${({ selected }) => (selected ? "#333" : "#777")};
  border-radius: ${({ selected }) => (selected ? "8px 8px 0 0" : "8px")};
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#f0f0f0" : "#fff")};
    color: ${({ selected }) => (selected ? "#333" : "#333")};
    border-color: ${({ selected }) => (selected ? "#ddd" : "#bbb")};
  }
`;

const UserProfileNav = () => {
  const [selectedOption, setSelectedOption] = useState("Personal");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case "Personal":
        return <Personal />;
      case "Educational":
        return <Education />;
      case "Current Education":
        return <CurrentEducation />;
      case "Address":
        return <Address />;
      case "Additional Info":
        return <AdditionalInfo />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <div>
        <div className="flex overflow-x-auto whitespace-nowrap">
          {[
            "Personal",
            "Educational",
            "Current Education",
            "Address",
            "Additional Info",
          ].map((option) => (
            <Button
              key={option}
              className={`inline-flex items-center h-12 px-2 py-2 text-center text-gray-700 ${
                selectedOption === option ? "bg-transparent" : "bg-gray-100"
              } border-b border-gray-300 sm:px-4 dark:border-gray-500 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300`}
              onClick={() => handleOptionClick(option)}
            >
              {/* Render your icon here based on the option */}
              <span className="mx-1 text-sm sm:text-base">{option}</span>
            </Button>
          ))}
        </div>
      </div>
      {/* Render the selected component */}
      {renderComponent()}
    </Container>
  );
};

export default UserProfileNav;
