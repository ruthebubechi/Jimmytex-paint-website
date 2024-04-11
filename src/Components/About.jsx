// import React from "react";
// import Aboutbackground from "../Assets/Aboutbackground.png";
// import Aboutbackground1 from "../Assets/Aboutbackground1.png";

// const About = () => {
//   return (
//     <div className="about-section-container">
//       <div className="about-background-image-container">
//         <img className="about-img" src={Aboutbackground} alt="" />
//       </div>
//       <div className="about-section-image-container">
//         <img src={Aboutbackground1} alt="" />
//       </div>
//       <div className="about-section-text-container">
//         <p className="primary-subheading">About</p>
//         <h1 className="primary-heading">Celebrating Colors, Crafting Dreams</h1>
//         <p className="primary-text">
//           At Jimmytex Paint Company, we're not just about paint; we're about
//           creating vibrant narratives that breathe life into your spaces. With a
//           commitment to quality, innovation, and boundless creativity.
//         </p>
//         <p className="primary-text">
//           With a commitment to quality, innovation, and customer satisfaction,
//           we invite you to join us in a colorful journey of transformation.
//           Let's create spaces that inspire, uplift, and leave a lasting
//           impression. Discover the Jimmytex difference – where every shade has a
//           story and every project is a masterpiece in the making.y.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import Aboutbackground from "../Assets/Aboutbackground.png";
import Aboutbackground1 from "../Assets/Aboutbackground1.png";

const About = () => {
  return (
    <div className="about-section-container" id="about-section">
      {" "}
      {/* Add id to the About section */}
      <div className="about-background-image-container">
        <img className="about-img" src={Aboutbackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={Aboutbackground1} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Celebrating Colors, Crafting Dreams</h1>
        <p className="primary-text">
          At Jimmytex Paint Company, we're not just about paint; we're about
          creating vibrant narratives that breathe life into your spaces. With a
          commitment to quality, innovation, and boundless creativity.
        </p>
        <p className="primary-text">
          With a commitment to quality, innovation, and customer satisfaction,
          we invite you to join us in a colorful journey of transformation.
          Let's create spaces that inspire, uplift, and leave a lasting
          impression. Discover the Jimmytex difference – where every shade has a
          story and every project is a masterpiece in the making.
        </p>
      </div>
    </div>
  );
};

export default About;
