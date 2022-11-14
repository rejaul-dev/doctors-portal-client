import React from 'react';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <InfoCards/>
            <Services/>
            <DentalCare/>
        </div>
    );
};

export default Home;