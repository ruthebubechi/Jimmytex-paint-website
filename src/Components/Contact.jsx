// import React from "react";

// import { useState } from "react";

// const Contact = () => {
//   const [email, setEmail] = useState(""); // Initialize email state with empty string

//   const handleInputChange = (event) => {
//     setEmail(event.target.value); // Update email state with user input
//   };

//   return (
//     <div className="contact-page-wrapper">
//       <h1 className="primary-heading">Need to make Enquiries?</h1>
//       <h1 className="primary-heading">Please send an email!</h1>
//       <div className="contact-form-container">
//         <input
//           type="email"
//           placeholder="Enter your email address"
//           value={email} // Bind input value to email state
//           onChange={handleInputChange} // Handle input change event
//         />
//         <div className="secondary-button-submit">
//           <a href={`mailto:${email}`}>
//             <button className="secondary-button-btn">Submit</button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState, useEffect } from "react";

const Contact = () => {
  const [email, setEmail] = useState(""); // Initialize email state with empty string

  const handleInputChange = (event) => {
    setEmail(event.target.value); // Update email state with user input
  };

  useEffect(() => {
    // Smooth scroll to the Contact section if URL contains a hash with contact ID
    if (window.location.hash === "#contact-section") {
      const section = document.getElementById("contact-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []); // Run only once on component mount

  return (
    <div className="contact-page-wrapper" id="contact-section">
      {" "}
      {/* Add id to the Contact section */}
      <h1 className="primary-heading">Need to make Enquiries?</h1>
      <h1 className="primary-heading">Please send an email!</h1>
      <div className="contact-form-container">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email} // Bind input value to email state
          onChange={handleInputChange} // Handle input change event
        />
        <div className="secondary-button-submit">
          <a href={`mailto:${email}`}>
            <button className="secondary-button-btn">Submit</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
