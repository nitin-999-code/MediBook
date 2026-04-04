import React from 'react';
import cardiologyImg from '../../../images/services/cardiology.jpg';
import neurologyImg from '../../../images/services/neurology.jpg';
import orthopedicsImg from '../../../images/services/orthopedics.jpg';
import dentistryImg from '../../../images/services/dentistry.jpg';
import pediatricImg from '../../../images/services/pediatrics.jpg';
import './index.css';

const specialities = [
	{ name: 'Pediatric', img: pediatricImg },
	{ name: 'Neurology', img: neurologyImg },
	{ name: 'Orthopedic', img: orthopedicsImg },
	{ name: 'Cardiologist', img: cardiologyImg },
	{ name: 'Dentist', img: dentistryImg },
];

const ClinicAndSpecialities = () => {
    return (
        <section className="specialities-section">
            <div className="container">
                <div className="specialities-header text-center">
                    <h2>Clinic & Specialities</h2>
                    <p className="specialities-lead">
                        Expert care across multiple specialties under one roof.
                    </p>
                </div>
                <div className="specialities-grid">
                    {specialities.map((item) => (
                        <div className="speciality-card" key={item.name}>
                            <div className="speciality-img-wrap">
                                <img src={item.img} className="img-fluid" alt={item.name} />
                            </div>
                            <p className="speciality-name">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClinicAndSpecialities;
