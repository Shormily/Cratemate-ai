import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Location from './Location/Location';
import Footer from './Footer/Footer';
import Service from './Service/Service';

const Home = () => {
    return (
        <>
            <Hero/>
            <About/>
            <Service/>
            <Location/>
            <Footer/>
        </>
    );
};

export default Home;