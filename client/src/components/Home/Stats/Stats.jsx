import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-container">
                    <div className="stat-item">
                        <div className="stat-value">1,200+</div>
                        <div className="stat-label">Happy Patients</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-value">30+</div>
                        <div className="stat-label">Expert Doctors</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-value">8+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-value">96%</div>
                        <div className="stat-label">Satisfaction Rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
