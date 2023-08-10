import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Location from './Location/Location';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <>
            <Hero/>
            <About/>
            <Location/>
            <Footer/>
        </>
    );
};

export default Home;