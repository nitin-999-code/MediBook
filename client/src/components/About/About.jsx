import React from 'react';
import './About.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Stats from '../Home/Stats/Stats';
import { FaAward, FaHeart, FaStethoscope, FaCheckCircle } from 'react-icons/fa';

const About = () => {
    const values = [
        {
            title: 'Excellence in Care',
            description: 'We maintain the highest standards of medical care, combining expertise with compassion.',
            icon: <FaStethoscope />
        },
        {
            title: 'Patient First',
            description: 'Your health and comfort are our top priorities. We listen, understand, and act accordingly.',
            icon: <FaHeart />
        },
        {
            title: 'Continuous Innovation',
            description: 'We stay at the forefront of medical advancements to provide you with the best treatments.',
            icon: <FaAward />
        }
    ];

    return (
        <div className="about-page">
            <Header />
            
            <section className="about-hero">
                <div className="container text-center">
                    <h1>About MediBook</h1>
                    <div className="title-underline"></div>
                    <p>Our mission is to make quality healthcare accessible to everyone.</p>
                </div>
            </section>
            
            <section className="about-mission">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <span className="about-label">Who we are</span>
                            <h2 className="about-heading">Committed to providing exceptional healthcare</h2>
                            <p className="about-text">
                                We are a team of dedicated healthcare professionals committed to providing compassionate, 
                                patient-centered care. With over 15 years of experience, we combine medical excellence 
                                with genuine care for each patient's wellbeing.
                            </p>
                            <p className="about-text">
                                Our state-of-the-art facility offers comprehensive medical services, from preventive care 
                                to specialized treatments, all delivered by experienced doctors who truly care about your health.
                            </p>
                            <div className="about-features">
                                {['Board-certified physicians', 'Modern equipment', '24/7 Emergency care', 'Patient-focused approach'].map((feature, index) => (
                                    <div className="about-feature-item" key={index}>
                                        <FaCheckCircle className="about-feature-icon" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-image-grid">
                                <div className="about-image-main">
                                    <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600" alt="Healthcare" className="img-fluid" />
                                </div>
                                <div className="about-image-side">
                                    <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400" alt="Medical team" className="img-fluid" />
                                    <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400" alt="Healthcare" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="about-stats-wrapper">
                <Stats />
            </div>

            <section className="about-values">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="about-label">Our values</span>
                        <h2 className="about-heading">What drives us</h2>
                    </div>
                    <div className="row g-4">
                        {values.map((value, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="about-value-card why-us-card">
                                    <div className="icon-wrapper">{value.icon}</div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
