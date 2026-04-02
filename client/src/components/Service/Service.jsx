import React from 'react';
import SubHeader from '../Shared/SubHeader';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import img from '../../images/features/baby.png';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = () => {
    const servicesList = [
        { name: 'Pediatrics', desc: 'Expert and compassionate care for your little ones.' },
        { name: 'Cardiology', desc: 'Comprehensive heart care and advanced diagnostics.' },
        { name: 'Neurology', desc: 'Specialized treatment for neurological conditions.' },
        { name: 'Orthopedics', desc: 'Bone, joint, and muscle care for all ages.' },
        { name: 'Dentistry', desc: 'Complete dental care for a healthy smile.' },
        { name: 'General Medicine', desc: 'Primary care and routine health checkups.' },
    ];

    return (
        <div className="service-page">
            <Header />
            <SubHeader title="Services" subtitle="Our Services — Expert care tailored to your needs." />

            <div className="container" style={{ marginTop: 80, marginBottom: 80 }}>
                <div className="row g-4">
                    {servicesList.map((item, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                            <div className="service-card-modern">
                                <div className="service-card-img">
                                    <img src={img} alt={item.name} className="img-fluid" />
                                </div>
                                <div className="service-card-body">
                                    <h4>{item.name}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="service-cta-section">
                <div className="container text-center">
                    <h2>Ready to get started?</h2>
                    <p className="lead-text mb-4">Book your appointment today and take the first step toward better health.</p>
                    <Link to={'/doctors'} className="btn-get-started">Book Appointment</Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Service;