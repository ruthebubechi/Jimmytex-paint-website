// import React from "react";
// import ProfilePic from "../Assets/ProfilePic.jpg";
// import { AiFillStar } from "react-icons/ai";

// const Testimonial = () => {
//   return (
//     <div className="work-section-wrapper">
//       <div className="work-section-top">
//         <p className="primary-subheading">Testimonial</p>
//         <h1 className="primary-heading">What They Are Saying</h1>
//         <p className="primary-text">
//           From cozy bedrooms to bustling offices, our premium-quality paints
//           have been the cornerstone of countless successful projects.
//         </p>
//       </div>
//       <div className="testimonial-section-bottom">
//         <img className="testimonial-img" src={ProfilePic} alt="" />
//         <p>
//           Jimmytex Paints truly exceeded my expectations! The color selection
//           was incredible, and the paint went on smoothly with excellent
//           coverage. I was amazed at how vibrant and long-lasting the finish was.
//           Thanks to Jimmytex, my home feels like a whole new space – I couldn't
//           be happier!
//         </p>
//         <div className="testimonials-stars-container">
//           <AiFillStar />
//           <AiFillStar />
//           <AiFillStar />
//           <AiFillStar />
//           <AiFillStar />
//         </div>
//         <h2>Ezekiel David C.</h2>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

import React from "react";
import ProfilePic from "../Assets/ProfilePic.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="testimonial-section">
      {" "}
      {/* Add id to the Testimonial section */}
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          From cozy bedrooms to bustling offices, our premium-quality paints
          have been the cornerstone of countless successful projects.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img className="testimonial-img" src={ProfilePic} alt="" />
        <p>
          Jimmytex Paints truly exceeded my expectations! The color selection
          was incredible, and the paint went on smoothly with excellent
          coverage. I was amazed at how vibrant and long-lasting the finish was.
          Thanks to Jimmytex, my home feels like a whole new space – I couldn't
          be happier!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Ezekiel David C.</h2>
      </div>
    </div>
  );
};

export default Testimonial;
