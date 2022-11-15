import React from "react";

const Testimonial = ({ testimonial }) => {
  const { name, descriptions, img, country } = testimonial;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{descriptions}</p>
        <div className="flex items-center">
          <div className="avatar mr-6">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p>{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
