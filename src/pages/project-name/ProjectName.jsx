// Importing necessary modules and components
import React, { useState, useEffect, useRef } from "react";
import "./projectname.scss";
import { NavBarSignIn } from "../../components/nav-bar-signin/NavBarSignIn";
import logo from "../../assets/Logo.svg";
import frame from "../../assets/Frame 1401.svg";
import MachinesDropDown from "../../components/CustomDropDown/MachinesDropDown";
import { FaPlus } from "react-icons/fa6";
import EmailInput from "../../components/email-input/EmailInput";
import Footer from "../../components/footer/Footer";
import ModuleDropdown from "../../components/CustomDropDown/ModuleDropdown";

// Main component for the project page
const ProjectName = () => {
  // State variables using hooks
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [diagramCheckboxChecked, setDiagramCheckboxChecked] = useState(true);
  const [contentBackgroundColor, setContentBackgroundColor] =
    useState("transparent");
  const contentRef = useRef(null);

  // Function to toggle the visibility of the module dropdown
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Function to handle checkbox changes for selected modules
  const handleCheckboxChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selectedOption) => selectedOption !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
  };

  // Function to remove a selected module
  const removeSelectedOption = (option) => {
    const updatedOptions = selectedOptions.filter(
      (selectedOption) => selectedOption !== option
    );
    setSelectedOptions(updatedOptions);
  };

  // Function to check if a button/module is selected
  const isButtonSelected = (language) => {
    return selectedOptions.includes(language);
  };

  // Function to handle content click and change background color
  const handleContentClick = () => {
    setContentBackgroundColor("var(--primary-variant)");
  };

  // useEffect to handle clicks outside the content area
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the content element
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        // Clicked outside, remove the background color
        setContentBackgroundColor("transparent");
      }
    };

    // Attach the event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  // Function to handle checkbox click and toggle checked state
  const handleCheckboxClick = () => {
    // Toggle the checked state
    setDiagramCheckboxChecked(!diagramCheckboxChecked);
  };

  // JSX structure for the project page
  return (
    <section className="project-name-section">
      <div className="wrapper">
        <NavBarSignIn />
        <main>
          <div className="header">
            <h3>Nice to Meet you, John!</h3>
            <p>Let’s configure your subscription</p>
          </div>
          <h3>Create your project</h3>
          <form action="">
            <div className="input-area project-name">
              <label className="input-label" htmlFor="">
                Project name
              </label>
              <input type="text" placeholder="project" />
            </div>

            <div
              ref={contentRef}
              className="content"
              style={{ backgroundColor: contentBackgroundColor }}
              onClick={handleContentClick}
            >
              <div className="input-area">
                <div className="top">
                  <h4>Tech of module I want to call</h4>
                  <div className="radio-input-area">
                    <h4>View Diagram</h4>
                    <label class="switch" for="checkbox">
                      <input
                        type="checkbox"
                        id="checkbox"
                        checked={diagramCheckboxChecked}
                        onChange={handleCheckboxClick}
                      />
                      <div class="slider"></div>
                    </label>
                  </div>
                </div>
                <div className="bottom">
                  <ModuleDropdown
                    selectedOptions={selectedOptions}
                    handleCheckboxChange={handleCheckboxChange}
                    removeSelectedOption={removeSelectedOption}
                    dropdownVisible={dropdownVisible}
                    toggleDropdown={toggleDropdown}
                  />
                </div>
              </div>
              {diagramCheckboxChecked && ( // Conditionally render based on checkbox state
                <div className="diagram-content">
                  <h4>Use modules from other technologies</h4>
                  <p>
                    With this license you will be able to{" "}
                    <b>create application for Windows, Linux and MacOS</b> in{" "}
                    <b>any supported technology</b> including CLR, Netcore,
                    Python, Ruby, Perl, NodeJS, C++ and Go that can access and
                    use any existing or custom <b>Python module</b> .
                  </p>
                  <div className="diagram">
                    <div className="top">
                      <p className="first-text">Your App</p>
                      <p className="last-text">Module</p>
                    </div>
                    <div className="bottom">
                      <button>Any supported technology</button>
                      <div className="line first"></div>
                      <img className="logo" src={logo} alt="logo" />
                      <img className="frame" src={frame} alt="frame" />
                      <div className="btns">
                        <span
                          className={
                            isButtonSelected("Python") ? "selected" : ""
                          }
                          onClick={() => handleCheckboxChange("Python")}
                        >
                          Python
                        </span>
                        <span
                          className={isButtonSelected("Perl") ? "selected" : ""}
                          onClick={() => handleCheckboxChange("Perl")}
                        >
                          Perl
                        </span>
                        <span
                          className={isButtonSelected("JVM") ? "selected" : ""}
                          onClick={() => handleCheckboxChange("JVM")}
                        >
                          JVM
                        </span>
                        <span
                          className={
                            isButtonSelected(".NET Core") ? "selected" : ""
                          }
                          onClick={() => handleCheckboxChange(".NET Core")}
                        >
                          .NET Core
                        </span>
                        <span
                          className={isButtonSelected("CRL") ? "selected" : ""}
                          onClick={() => handleCheckboxChange("CRL")}
                        >
                          CRL
                        </span>
                        <span
                          className={isButtonSelected("Ruby") ? "selected" : ""}
                          onClick={() => handleCheckboxChange("Ruby")}
                        >
                          Ruby
                        </span>
                        <span
                          className={
                            isButtonSelected("Node .js") ? "selected" : ""
                          }
                          onClick={() => handleCheckboxChange("Node .js")}
                        >
                          Node .js
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Select more target technologies if you need to use modules
                    from other runtimes.
                  </p>
                  <h4 className="scnd">
                    Create module available for other technologies
                  </h4>
                  <p>
                    You can also create Python module and make it accessible for
                    any other application created in any support technology
                    including including CLR, Netcore, Python, Ruby, Perl,
                    NodeJS, C++ and Go.
                  </p>
                  <div className="diagram diagram-2">
                    <div className="top">
                      <p>Your Module</p>
                      <p>Tech with access to your modules</p>
                    </div>
                    <div className="bottom">
                      <div className="btns">
                        <span
                          className={
                            isButtonSelected("Python") ? "selected" : ""
                          }
                          onClick={() => handleCheckboxChange("Python")}
                        >
                          Python
                        </span>
                        <span
                          className={isButtonSelected("Perl") ? "selected" : ""}
                          onClick={() => handleCheckboxChange("Perl")}
                        >
                          Perl
                        </span>
                        <span
                          className={isButtonSelected("JVM") ? "selected" : ""}
                          onClick={() => handleCheckboxChange("JVM")}
                        >
                          JVM
                        </span>
                        <span
                          className={
                            isButtonSelected(".NET Core") ? "selected" : ""
                          }
                          onClick={() => handleCheckboxChange(".NET Core")}
                        >
                          .NET Core
                        </span>
                        <span
                          className={isButtonSelected("CRL") ? "selected" : ""}
                          onClick={() => handleCheckboxChange("CRL")}
                        >
                          CRL
                        </span>
                        <span
                          className={isButtonSelected("Ruby") ? "selected" : ""}
                          onClick={() => handleCheckboxChange("Ruby")}
                        >
                          Ruby
                        </span>
                        <span
                          className={
                            isButtonSelected("Node .js") ? "selected" : ""
                          }
                          onClick={() => handleCheckboxChange("Node .js")}
                        >
                          Node .js
                        </span>
                      </div>
                      <img className="frame" src={frame} alt="frame" />
                      <img className="logo" src={logo} alt="logo" />
                      <div className="line"></div>
                      <div className="right-btns">
                        <span>Ruby</span>
                        <span>Node .js</span>
                        <span>C#</span>
                        <span>JAR</span>
                        <span>Perl</span>
                        <span>JLL</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ paddingBottom: "14px" }}>
                    Select more target technologies if you need to create
                    universal modules in other technologies that will be
                    accessible from any supported runtime.
                  </p>
                </div>
              )}
            </div>
            <MachinesDropDown />
            <EmailInput />
          </form>
          <button className="new-project">
            <FaPlus className="icon" />
            <span>New Project</span>
          </button>
          <div className="summary-container">
            <h3>Summary</h3>
            <div className="trial">
              <h3>Free 30-day trial</h3>
              <p>No credit card required.</p>
            </div>
          </div>
          <div className="continue-btn-container">
            <button disabled>Continue to Summary</button>
          </div>
        </main>
        <Footer />
      </div>
    </section>
  );
};

// Exporting the component as the default export
export default ProjectName;
