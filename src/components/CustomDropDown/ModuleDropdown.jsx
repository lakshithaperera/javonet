// Importing necessary React components, icons, and styles
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./ModuleDropdown.scss"; // Import SCSS file

// ModuleDropdown Component: a dropdown for selecting programming modules
const ModuleDropdown = ({
  selectedOptions,
  handleCheckboxChange,
  removeSelectedOption,
  dropdownVisible,
  toggleDropdown,
}) => {
  // Available programming modules
  const Modules = [
    "Python",
    "Perl",
    "JVM",
    ".NET Core",
    "CRL",
    "Ruby",
    "Node.js",
  ];

  return (
    // Main container for the custom dropdown
    <div className={`custom-dropdown ${dropdownVisible ? "open" : ""}`}>
      {/* Dropdown button section */}
      <div className={`dropdown-button ${dropdownVisible ? "active" : ""}`}>
        {selectedOptions.length > 0 ? (
          // Display selected options with remove button
          <>
            {" "}
            {selectedOptions.map((option) => (
              <span key={option}>
                {option}
                <i
                  onClick={() => removeSelectedOption(option)}
                  className="fa-solid fa-xmark"
                ></i>
              </span>
            ))}
          </>
        ) : (
          // Display default text when no option is selected
          "Select from dropdown or diagram below"
        )}
        {/* Dropdown toggle button */}
        <IoIosArrowDown
          className={`drop-down-toggle-btn ${dropdownVisible ? "active" : ""}`}
          onClick={toggleDropdown}
        />
      </div>

      {/* Dropdown content section */}
      {dropdownVisible && (
        <div className="dropdown-content">
          {/* Map through available modules to display checkboxes */}
          {Modules.map((language) => (
            <div
              className={`checkbox-container ${
                selectedOptions.includes(language) ? "checked" : ""
              }`}
              key={language}
            >
              {/* Checkbox for each programming module */}
              <input
                type="checkbox"
                id={language}
                onChange={() => handleCheckboxChange(language)}
                checked={selectedOptions.includes(language)}
              />
              {/* Label for the checkbox */}
              <label className="checkbox-label" htmlFor={language}>
                {language}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModuleDropdown;
