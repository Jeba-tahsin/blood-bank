import React from 'react';
import Banner from '../Banner/Banner';
import BloodGroup from '../BloodGroup/BloodGroup';
import Services from '../Services/Services';
import Volunteer from '../Volunteer/Volunteer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BloodGroup></BloodGroup>
            <Volunteer></Volunteer>
        </div>
    );
};

export default Home;