import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate,setSelectedDate}) => {
    return (
        <div className='mt-16'>
            <h2 className='text-center text-primary font-bold text-3xl'>Available Appointments on {format(selectedDate, "PP")}</h2>
        </div>
    );
};

export default AvailableAppointment;