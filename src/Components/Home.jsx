// import React from "react";
// import Homebg from "../Assets/Homebg.png";
// import HomeImage from "../Assets/HomeImage.png";
// import Navbar from "./Navbar";
// // import { FiArrowRight } from "react-icons/fi";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <Navbar />
//       <div className="home-banner-container">
//         <div className="home-bannerImage-container">
//           <img src={Homebg} alt="" />
//         </div>
//         <div className="home-text-section">
//           <h1 className="primary-heading">
//             Color Your World with Jimmytex Paints!
//           </h1>
//           <p className="primary-text">
//             Transforming Spaces, Inspiring Creativity, One Brushstroke at a
//             Time. Experience the Difference of Premium Quality, Vibrant Colors,
//             and Lasting Impressions. Let Your Imagination Soar with Jimmytex –
//             Where Every Wall Tells a Story!
//           </p>
//           <button className="secondary-button">Let's get to business </button>
//         </div>
//         <div className="home-image-section">
//           <img src={HomeImage} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Homebg from "../Assets/Homebg.png";
import HomeImage from "../Assets/HomeImage.png";
import Navbar from "./Navbar";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container" id="home-section">
        <div className="home-bannerImage-container">
          <img src={Homebg} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Color Your World with Jimmytex Paints!
          </h1>
          <p className="primary-text">
            Transforming Spaces, Inspiring Creativity, One Brushstroke at a
            Time. Experience the Difference of Premium Quality, Vibrant Colors,
            and Lasting Impressions. Let Your Imagination Soar with Jimmytex –
            Where Every Wall Tells a Story!
          </p>
          <button
            className="secondary-button"
            onClick={() => scrollToSection("contact-section")}
          >
            Let's get to business
          </button>
        </div>
        <div className="home-image-section">
          <img src={HomeImage} alt="" />
        </div>
      </div>
      {/* Add other sections with corresponding IDs */}
    </div>
  );
};

export default Home;
