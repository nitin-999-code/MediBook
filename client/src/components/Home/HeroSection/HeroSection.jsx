import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 hero-text-section">
                        <small className="hero-eyebrow">Trusted Healthcare Platform</small>
                        <h1 className="hero-heading">Find & Book The Right Doctor, Instantly.</h1>
                        <p className="hero-subtext">Connect with verified specialists, book appointments in minutes, and manage your health journey all in one place.</p>
                        
                        <div className="d-flex justify-content-start gap-3 mt-4">
                            <Link to={'/doctors'} className="btn-get-started">Book Appointment</Link>
                            <Link to={'/about'} className="btn-get-started-outlined">How it works</Link>
                        </div>

                        <div className="hero-stats mt-5 d-flex gap-4">
                            <div className="stat-badge">
                                <span className="stat-icon">👥</span>
                                <strong>1,200+</strong> Patients
                            </div>
                            <div className="stat-badge">
                                <span className="stat-icon">👨‍⚕️</span>
                                <strong>30+</strong> Doctors
                            </div>
                            <div className="stat-badge">
                                <span className="stat-icon">⭐</span>
                                <strong>96%</strong> Satisfaction
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 hero-img-section d-none d-lg-block">
                        <div className="hero-blob-bg">
                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" alt="Doctor" className="img-fluid hero-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;