import React from 'react';
import Header from '../../Shared/Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Stats from '../Stats/Stats';
import HowItWorks from '../HowItWorks/HowItWorks';
import InfoPage from '../InfoPage/InfoPage';
import ClinicAndSpecialities from '../ClinicAndSpecialities/ClinicAndSpecialities';
import OurDoctors from '../OurDoctor/OurDoctors';
import Service from '../Services/Service';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import CtaSection from '../CtaSection/CtaSection';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Stats />
            <HowItWorks />
            <InfoPage />
            <ClinicAndSpecialities />
            <OurDoctors />
            <Service />
            <Testimonial />
            <Blog />
            <CtaSection />
            <Footer />
        </>
    );
};

export default Home;