import React from 'react';
import './index.css';
import { FiAlertCircle, FiUser, FiGrid, FiThermometer, FiActivity } from 'react-icons/fi';
import useScrollReveal from '../../../hooks/useScrollReveal';

const facilities = [
  {
    icon: <FiAlertCircle />,
    title: 'ICU',
    desc: '24-hour critical care with continuous monitoring and specialist oversight.',
  },
  {
    icon: <FiUser />,
    title: 'Private Consultation',
    desc: 'One-on-one appointments in dedicated rooms — no crowded waiting areas.',
  },
  {
    icon: <FiGrid />,
    title: 'General Wards',
    desc: 'Clean, well-staffed wards with round-the-clock nursing care.',
  },
  {
    icon: <FiThermometer />,
    title: 'Diagnostics',
    desc: 'On-site testing with fast turnaround — most results back within the day.',
  },
  {
    icon: <FiActivity />,
    title: 'Lab Services',
    desc: 'Full-spectrum clinical lab with certified technicians and digital reports.',
  },
];

const Service = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div
          ref={headerRef}
          className={`services-header reveal-up ${headerVisible ? 'reveal-active' : ''}`}
        >
          <h2 className="services-title">What's available on-site</h2>
          <p className="services-sub">
            Our partner facilities are equipped for more than just consultations.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`services-layout reveal-stagger-parent ${contentVisible ? 'reveal-active' : ''}`}
        >
          {/* Left: clinical image */}
          <div className="services-img-wrap stagger-item">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80"
              alt="Hospital facility"
              className="services-img"
            />
            <div className="services-img-caption">
              <strong>Emergency Care</strong>
              <span>24/7 response team on standby</span>
            </div>
          </div>

          {/* Right: facility list */}
          <div className="services-list stagger-item">
            {facilities.map((f) => (
              <div key={f.title} className="facility-item">
                <div className="facility-icon">{f.icon}</div>
                <div>
                  <h3 className="facility-name">{f.title}</h3>
                  <p className="facility-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
