import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  const { treatment, price, slot, appointmentDate } = booking;
  return (
    <div>
      <h2 className="text-xl font-bold">Payment for {treatment}</h2>
      <p>
        Please pay <strong>${price}</strong> for your appointment{" "}
        {appointmentDate} on {slot}
      </p>
    </div>
  );
};

export default Payment;
