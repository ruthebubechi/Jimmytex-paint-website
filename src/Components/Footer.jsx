import React from "react";
// import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          {/* <img className="footer-img" src={Logo} alt="" /> */}
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <FaInstagram />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>About</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Products</span>
        </div>
        <div className="footer-section-columns">
          <span>+2348139394000</span>
          <span>hello@paint.com</span>
          <span>feedback@paint.com</span>
          <span>jimmytex@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <div className="footer-wrapper">
//       <div className="footer-section">
//         <div className="footer-section-columns">
//           <span>Quality</span>
//           <span>Help</span>
//           <span>Share</span>
//           <span>Careers</span>
//           <span>Testimonials</span>
//           <span>Work</span>
//         </div>
//         <div className="footer-section-columns">
//           <span>244-5333-7783</span>
//           <span>hello@food.com</span>
//           <span>press@food.com</span>
//           <span>contact@food.com</span>
//         </div>
//         <div className="footer-section-columns">
//           <span>Terms & Conditions</span>
//           <span>Privacy Policy</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
