import React from "react";
import { Link } from "react-router-dom";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const DentalCare = () => {
  return (
    <section
      className="mt-32"
      // style={{background:`url(${appointment})`}}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="-mt-32 lg:w-1/2 h-72 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-3xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Link to="/appointment">
              <PrimaryButton>Book Appointment</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalCare;
