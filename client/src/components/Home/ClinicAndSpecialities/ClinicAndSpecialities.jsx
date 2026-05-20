import React from 'react';
import { Link } from 'react-router-dom';
import cardiologyImg from '../../../images/services/cardiology.jpg';
import neurologyImg from '../../../images/services/neurology.jpg';
import orthopedicsImg from '../../../images/services/orthopedics.jpg';
import dentistryImg from '../../../images/services/dentistry.jpg';
import pediatricImg from '../../../images/services/pediatrics.jpg';
import './index.css';
import useScrollReveal from '../../../hooks/useScrollReveal';

const specialities = [
  { name: 'Pediatrics',  img: pediatricImg,  desc: 'Children & teen health' },
  { name: 'Neurology',   img: neurologyImg,   desc: 'Brain & nervous system' },
  { name: 'Orthopedics', img: orthopedicsImg, desc: 'Bones, joints & spine' },
  { name: 'Cardiology',  img: cardiologyImg,  desc: 'Heart & cardiovascular' },
  { name: 'Dentistry',   img: dentistryImg,   desc: 'Teeth & oral health' },
];

const fallbackImg = 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=150&q=80';

const ClinicAndSpecialities = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section className="specialities-section" id="specialties">
      <div className="container">
        <div
          ref={headerRef}
          className={`specialities-header reveal-up ${headerVisible ? 'reveal-active' : ''}`}
        >
          <h2 className="specialities-title">Browse by specialty</h2>
          <p className="specialities-sub">
            Not sure which doctor you need? Start with a specialty and go from there.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`specialities-grid reveal-stagger-parent ${gridVisible ? 'reveal-active' : ''}`}
        >
          {specialities.map((item) => (
            <Link
              to={`/doctors?specialty=${item.name}`}
              className="speciality-card stagger-item"
              key={item.name}
            >
              <div className="speciality-img-wrap">
                <img
                  src={item.img}
                  alt={item.name}
                  onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg; }}
                />
              </div>
              <h3 className="speciality-name">{item.name}</h3>
              <p className="speciality-desc">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicAndSpecialities;
