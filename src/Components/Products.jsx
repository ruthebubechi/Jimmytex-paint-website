import React from "react";
import Workimg1 from "../Assets/Workimg1.jpg";
import Workimg2 from "../Assets/Workimg2.jpg";
import Workimg3 from "../Assets/Workimg3.jpg";
import Workimg4 from "../Assets/Workimg4.jpg";

const Products = () => {
  const workInfoData = [
    {
      image: Workimg1,
      title: "Oil paint",
      text: "Jimmytex Oil Paints: Harnessing the Intensity of Rich Pigments, Infusing Depth into Your Artwork. Crafted for Brilliance and Timeless Elegance. Experience the Difference with Vibrant Colors and Lasting Beauty",
    },
    {
      image: Workimg2,
      title: "Interior Emulsion Paint",
      text: "Jimmytex's Interior Emulsion Paint offers superior coverage and durability for indoor spaces. With a smooth finish and a wide range of colors, it effortlessly enhances the ambiance of any room. ",
    },
    {
      image: Workimg3,
      title: "Exterior Weatherproof Paint",
      text: " Formulated with advanced technology, it resists cracking, peeling, and fading, ensuring your home's exterior stays beautiful for years to come.",
    },

    {
      image: Workimg3,
      title: "Acrylic Latex Paint",
      text: "Ideal for both interior and exterior surfaces, it dries quickly to a smooth, durable finish that resists scuffs and stains. Acrylic Latex Paint combines the durability of acrylic with the ease of latex application",
    },
    {
      image: Workimg4,
      title: "High-Gloss Enamel Paint",
      text: "Our High-Gloss Enamel Paint delivers a luxurious finish with exceptional durability and shine. Perfect for trim, doors, and accents, its high-gloss formula adds a touch of elegance to any space.",
    },
    {
      image: Workimg4,
      title: "Metallic Paint",
      text: "Available in a variety of shimmering shades, it creates a lustrous, reflective finish that catches the eye. Whether used for accent walls, furniture, or decorative accents, its metallic sheen adds depth and sophistication to any space.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Products</p>
        <h1 className="primary-heading">What we offer</h1>
        <p className="primary-text">
          Our product line encompasses a spectrum of premium-quality paints
          designed to elevate any space. From interior to exterior, our paints
          boast exceptional coverage, durability, and a stunning array of colors
          to suit every taste and style.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
