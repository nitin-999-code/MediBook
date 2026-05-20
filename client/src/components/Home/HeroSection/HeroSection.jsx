import React, { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiShield, FiClock } from 'react-icons/fi';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToHowItWorks = (e) => {
    e.preventDefault();
    const el = document.getElementById('how-it-works');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-premium" className="hero-premium">
      {/* Background Image */}
      <div className="hero-bg-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1800&q=85"
          alt="Doctor consulting patient in modern clinic"
          className="hero-bg-image"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=85';
          }}
        />
        <div className="hero-dark-overlay" />
      </div>

      {/* Hero Content — centered, clean, no extras */}
      <div className="hero-content">

        {/* Heading — exactly 2 lines, no wrapping */}
        <h1 className={`hero-title hero-anim hero-anim--0 ${visible ? 'hero-anim-active' : ''}`}>
          <span className="hero-title-main">Book Trusted Doctors</span>
          <span className="hero-title-sub">Without Waiting</span>
        </h1>

        {/* Subtext */}
        <p className={`hero-sub hero-anim hero-anim--1 ${visible ? 'hero-anim-active' : ''}`}>
          Find verified specialists, compare availability, and confirm appointments
          in minutes — all from one secure healthcare platform.
        </p>

        {/* Trust Chips */}
        <div className={`hero-chips hero-anim hero-anim--2 ${visible ? 'hero-anim-active' : ''}`}>
          <span className="hero-chip"><FiCheckCircle /> Verified Doctors</span>
          <span className="hero-chip"><FiClock /> Instant Booking</span>
          <span className="hero-chip"><FiShield /> Secure Records</span>
        </div>

        {/* CTA Buttons */}
        <div className={`hero-btns hero-anim hero-anim--3 ${visible ? 'hero-anim-active' : ''}`}>
          <Link to="/doctors" className="hero-btn-primary" id="hero-book-btn">
            Book an Appointment <FiArrowRight />
          </Link>
          <a
            href="#how-it-works"
            onClick={handleScrollToHowItWorks}
            className="hero-btn-ghost"
            id="hero-howitworks-btn"
          >
            How It Works
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;