import React from 'react';
import './Stats.css';
import useScrollReveal from '../../../hooks/useScrollReveal';

const Stats = () => {
    const [revealRef, isVisible] = useScrollReveal();

    return (
        <section className="stats-section">
            <div className="container">
                <div
                    ref={revealRef}
                    className={`stats-container reveal-fade-up ${isVisible ? 'reveal-active' : ''}`}
                >
                    <div className="stat-item">
                        <div className="stat-value">1,200+</div>
                        <div className="stat-label">Verified Patients</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-value">30+</div>
                        <div className="stat-label">Specialist Doctors</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-value">96%</div>
                        <div className="stat-label">Patient Satisfaction</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-value">24/7</div>
                        <div className="stat-label">Booking Availability</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
