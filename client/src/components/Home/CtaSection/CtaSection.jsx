import React from 'react';
import './CtaSection.css';
import { Link } from 'react-router-dom';
import useScrollReveal from '../../../hooks/useScrollReveal';
import { FiArrowRight, FiUserPlus } from 'react-icons/fi';

const CtaSection = () => {
  const [revealRef, isVisible] = useScrollReveal();

  return (
    <section className="cta-section" id="cta-section">
      <div className="container">
        <div
          ref={revealRef}
          className={`cta-card reveal-fade-up ${isVisible ? 'reveal-active' : ''}`}
        >
          <div className="cta-glow cta-glow--1" />
          <div className="cta-glow cta-glow--2" />

          <div className="cta-body">
            <div className="cta-text">
              <h2 className="cta-heading">Your next appointment is 2 minutes away.</h2>
              <p className="cta-lead">
                Search for a doctor, pick a time that works, and you're done.
                No calls, no confusion.
              </p>
            </div>

            <div className="cta-actions">
              <Link to="/doctors" className="cta-btn cta-btn--primary">
                Find a doctor <FiArrowRight />
              </Link>
              <Link to="/register" className="cta-btn cta-btn--ghost">
                <FiUserPlus /> Join as a doctor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
