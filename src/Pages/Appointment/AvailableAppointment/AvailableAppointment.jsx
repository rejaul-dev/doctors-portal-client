import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, 'PP')
  
  // react tanStack query 
  const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(`https://doctors-portal-server-rose-chi.vercel.app/appointmentOptions?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="mt-16">
      <h2 className="text-center text-secondary font-bold text-xl">
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
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
