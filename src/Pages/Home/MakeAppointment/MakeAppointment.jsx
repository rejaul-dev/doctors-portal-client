import React from "react";
import { Link } from "react-router-dom";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-32"
    style={{background:`url(${appointment})`}}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-36 hidden md:block lg:w-1/2 rounded-lg shadow-2xl"
            alt="doctor"
          />
          <div>
            <h3 className="text-lg font-bold text-primary">Appointment</h3>
            <h1 className="text-3xl text-white font-bold">Make an appointment Today</h1>
            <p className="text-white py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <Link to='/appointment'><PrimaryButton>Book Appointment</PrimaryButton></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
