import React from 'react';
import './HowItWorks.css';
import useScrollReveal from '../../../hooks/useScrollReveal';
import { FiSearch, FiCalendar, FiCheckSquare, FiFileText } from 'react-icons/fi';

const steps = [
  {
    icon: <FiSearch size={26} />,
    title: 'Find a doctor',
    desc: 'Search by specialty or condition. Filter by location, rating, or availability.',
    num: '01',
  },
  {
    icon: <FiCalendar size={26} />,
    title: 'Pick a time',
    desc: "See real-time availability and choose a slot that works for you — no back-and-forth.",
    num: '02',
  },
  {
    icon: <FiCheckSquare size={26} />,
    title: 'Confirm your booking',
    desc: "You'll get an instant confirmation. No waiting on hold, no paperwork upfront.",
    num: '03',
  },
  {
    icon: <FiFileText size={26} />,
    title: 'Visit & get records',
    desc: 'Attend your appointment and access your prescriptions and notes right after.',
    num: '04',
  },
];

const HowItWorks = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div
          ref={headerRef}
          className={`hiw-header reveal-up ${headerVisible ? 'reveal-active' : ''}`}
        >
          <h2 className="hiw-title">How it works</h2>
          <p className="hiw-sub">
            From finding a doctor to walking out with your records — here's what the process looks like.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`hiw-grid reveal-stagger-parent ${cardsVisible ? 'reveal-active' : ''}`}
        >
          <div className="hiw-connector d-none d-lg-block" />
          {steps.map((step) => (
            <div key={step.num} className="hiw-card stagger-item">
              <div className="hiw-card-top">
                <div className="hiw-icon-wrap">{step.icon}</div>
                <span className="hiw-num">{step.num}</span>
              </div>
              <h3 className="hiw-card-title">{step.title}</h3>
              <p className="hiw-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
