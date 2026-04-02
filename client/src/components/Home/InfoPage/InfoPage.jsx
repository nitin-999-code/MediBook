import React from 'react';
import './InfoPage.css';
import { FaHeartbeat, FaCalendarCheck, FaNotesMedical } from 'react-icons/fa';

const InfoPage = () => {
    return (
        <section className="why-us-section section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="section-eyebrow">WHY MEDIBOOK</span>
                    <h2 className="section-heading">Healthcare made simple</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="why-us-card">
                            <div className="icon-wrapper">
                                <FaHeartbeat />
                            </div>
                            <h3>Verified Doctors</h3>
                            <p>Every doctor is background-checked and credentialed.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="why-us-card">
                            <div className="icon-wrapper">
                                <FaCalendarCheck />
                            </div>
                            <h3>Instant Booking</h3>
                            <p>Book same-day or future appointments in under 2 minutes.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="why-us-card">
                            <div className="icon-wrapper">
                                <FaNotesMedical />
                            </div>
                            <h3>Prescription Tracking</h3>
                            <p>View and download your prescriptions anytime.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoPage;
