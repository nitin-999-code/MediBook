import React from 'react';
import img1 from '../../../images/specialities/specialities-01.png';
import img2 from '../../../images/specialities/specialities-02.png';
import img3 from '../../../images/specialities/specialities-03.png';
import img4 from '../../../images/specialities/specialities-04.png';
import img5 from '../../../images/specialities/specialities-05.png';
import './index.css';

const specialities = [
	{ name: 'Urology', img: img1 },
	{ name: 'Neurology', img: img2 },
	{ name: 'Orthopedic', img: img3 },
	{ name: 'Cardiologist', img: img4 },
	{ name: 'Dentist', img: img5 },
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
