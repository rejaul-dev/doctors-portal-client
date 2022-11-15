import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonialsData = [
    {
      _id: 1,
      name: "Winson Herry",
      descriptions:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      country: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      descriptions:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      country: "California",
    },
    {
      _id: 3,
      name: "Winson Herry",
      descriptions:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      country: "California",
    },
  ];
  return (
    <section className="my-16 ">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-primary font-bold">Testimonial</h3>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <div>
          <figure>
            <img className="w-24 lg:w-48" src={quote} alt="Shoes" />
          </figure>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsData.map((testimonial) => (
          <Testimonial key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
