import React, { useState } from "react";
import "./emailinput.scss";

// Component definition for an email input section
const EmailInput = () => {
  // State to manage the input value and the list of emails
  const [emailInput, setEmailInput] = useState("");
  const [emails, setEmails] = useState([]);

  // Event handler for input value change
  const handleInputChange = (e) => {
    setEmailInput(e.target.value);
  };

  // Event handler for keydown events in the input
  const handleInputKeyDown = (e) => {
    // Check if Enter key or comma is pressed
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      // Call the function to add the email
      addEmail();
    }
  };

  // Function to add a valid email to the list
  const addEmail = () => {
    const trimmedEmail = emailInput.trim();
    if (trimmedEmail !== "") {
      // Update the emails list with the new email and clear the input
      setEmails([...emails, trimmedEmail]);
      setEmailInput("");
    }
  };

  // Function to remove an email from the list
  const removeEmail = (index) => {
    // Create a copy of the emails list and remove the specified email
    const updatedEmails = [...emails];
    updatedEmails.splice(index, 1);
    // Update the state with the modified list
    setEmails(updatedEmails);
  };

  // JSX structure for the email input section
  return (
    <section className="email-input">
      <h4>Invite team members</h4>
      <div className="emails-input-area">
        <ul className="email-list">
          {/* Render the list of emails with remove icons */}
          {emails.map((email, index) => (
            <li key={index} className="email-item email">
              {email}
              <i
                className="fa-solid fa-xmark"
                onClick={() => removeEmail(index)}
              ></i>
            </li>
          ))}
          {/* Input field for adding new emails */}
          <li className="email-item input">
            <input
              id="emailInput"
              type="text"
              placeholder="Email"
              value={emailInput}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
          </li>
        </ul>
      </div>
      {/* Instructions for the user */}
      <p>
        Type emails of people you wish to invite to your team. Use commas or
        press Enter to separate; you can add as many as you’d like.
      </p>
    </section>
  );
};

// Export the EmailInput component as the default export
export default EmailInput;
