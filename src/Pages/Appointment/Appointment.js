import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableComponents from './AvailableComponents';

const Appointment = () => {
    const [date,setDate]=useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date}setDate={setDate}></AppointmentBanner>
            <AvailableComponents date={date}></AvailableComponents>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;