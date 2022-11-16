import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <div className="mt-16">
      <h2 className="text-center text-secondary font-bold text-3xl">
        Available Appointments on {format(selectedDate, "PP")}
      </h2>
      <div className="grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-28">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal selectedDate={selectedDate} treatment={treatment} />
      )}
    </div>
  );
};

export default AvailableAppointment;
