import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png"
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";


const Banner = () => {
  return (
    <div className="hero pb-24 pt-24"
    //background image
    style={{background:`url(${bg})`}}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:w-1/2 rounded-lg shadow-lg" alt="" />
        <div>
          <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
            <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
