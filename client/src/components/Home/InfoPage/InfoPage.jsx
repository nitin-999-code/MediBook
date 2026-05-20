import React from 'react';
import './InfoPage.css';
import { FiShield, FiCalendar, FiLock, FiFileText } from 'react-icons/fi';
import useScrollReveal from '../../../hooks/useScrollReveal';

const benefits = [
  {
    icon: <FiShield />,
    title: 'Every doctor is verified',
    desc: "We check credentials before anyone appears on the platform — so you're not guessing.",
    color: 'green',
  },
  {
    icon: <FiCalendar />,
    title: 'Real-time availability',
    desc: 'No "call us to check". You see actual open slots and book them directly.',
    color: 'emerald',
  },
  {
    icon: <FiLock />,
    title: 'Your data stays private',
    desc: 'Medical records are encrypted and only accessible to you and your doctor.',
    color: 'teal',
  },
  {
    icon: <FiFileText />,
    title: 'Prescriptions, digitally',
    desc: 'After your visit, prescriptions and notes show up in your dashboard — no paper needed.',
    color: 'mint',
  },
];

const InfoPage = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();

  return (
    <section className="why-us-section" id="why-us">
      <div className="container">
        <div
          ref={headerRef}
          className={`why-us-header reveal-up ${headerVisible ? 'reveal-active' : ''}`}
        >
          <h2 className="why-us-title">Why patients choose MediBook</h2>
          <p className="why-us-sub">
            We built this because booking a doctor shouldn't be confusing, slow, or stressful.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`why-us-layout reveal-stagger-parent ${contentVisible ? 'reveal-active' : ''}`}
        >
          {/* Left: featured stat card */}
          <div className="why-us-feature-card stagger-item">
            <p className="why-us-feature-label">Specialists on platform</p>
            <div className="why-us-feature-stat">100%</div>
            <p className="why-us-feature-note">
              credential-verified before going live
            </p>
            <p className="why-us-feature-body">
              Every doctor you find here has been reviewed by our team. We don't let just anyone list a profile.
            </p>
          </div>

          {/* Right: benefit rows */}
          <div className="why-us-benefits stagger-item">
            {benefits.map((b) => (
              <div key={b.title} className="why-us-benefit-item">
                <div className={`benefit-icon benefit-icon--${b.color}`}>{b.icon}</div>
                <div>
                  <h3 className="benefit-title">{b.title}</h3>
                  <p className="benefit-desc">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
