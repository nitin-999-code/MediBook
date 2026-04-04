import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegCalendarTimes, FaUserMd, FaRegNewspaper, FaStar, FaSearch, FaExclamationCircle } from 'react-icons/fa';

/**
 * Friendly empty-state component with icon, message, subtitle, and optional action.
 *
 * @param {string} type        — 'doctors' | 'appointments' | 'blogs' | 'reviews' | 'search' | 'generic'
 * @param {string} title       — override default title
 * @param {string} description — override default description
 * @param {string} actionText  — CTA button label
 * @param {string} actionLink  — CTA link
 * @param {function} onAction  — CTA click handler (alternative to link)
 */

const presets = {
  doctors: {
    icon: <FaUserMd />,
    title: 'No doctors available yet',
    description: "We're currently onboarding specialists in your area. Please check back soon or try adjusting your filters.",
    actionText: 'Browse all doctors',
    actionLink: '/doctors',
  },
  appointments: {
    icon: <FaRegCalendarTimes />,
    title: 'No appointments found',
    description: "You don't have any appointments yet. Book your first consultation with a trusted specialist.",
    actionText: 'Book an appointment',
    actionLink: '/doctors',
  },
  blogs: {
    icon: <FaRegNewspaper />,
    title: 'No articles published yet',
    description: 'Our medical team is crafting helpful health insights. New articles will appear here shortly.',
    actionText: 'Go to homepage',
    actionLink: '/',
  },
  reviews: {
    icon: <FaStar />,
    title: 'No reviews yet',
    description: 'Be the first to share your experience and help others find the right doctor.',
  },
  search: {
    icon: <FaSearch />,
    title: 'No results found',
    description: "We couldn't find anything matching your search. Try different keywords or reset your filters.",
  },
  generic: {
    icon: <FaExclamationCircle />,
    title: 'Nothing here yet',
    description: "There's no data to display at the moment.",
  },
};

const EmptyState = ({
  type = 'generic',
  title,
  description,
  actionText,
  actionLink,
  onAction,
  className = '',
}) => {
  const preset = presets[type] || presets.generic;
  const finalTitle = title || preset.title;
  const finalDesc = description || preset.description;
  const finalAction = actionText || preset.actionText;
  const finalLink = actionLink || preset.actionLink;

  return (
    <div className={`empty-state fade-in-up ${className}`} style={styles.wrapper}>
      <div style={styles.iconCircle}>{preset.icon}</div>
      <h3 style={styles.title}>{finalTitle}</h3>
      <p style={styles.description}>{finalDesc}</p>
      {(finalAction && (finalLink || onAction)) && (
        finalLink ? (
          <Link to={finalLink} style={styles.button}>
            {finalAction}
          </Link>
        ) : (
          <button onClick={onAction} style={styles.button}>
            {finalAction}
          </button>
        )
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 24px',
    textAlign: 'center',
    maxWidth: '420px',
    margin: '0 auto',
  },
  iconCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'var(--primary-bg, #EEFAF5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    color: 'var(--primary, #166534)',
    marginBottom: '24px',
    boxShadow: '0 4px 20px rgba(10,110,85,0.1)',
  },
  title: {
    fontSize: '20px',
    fontWeight: 700,
    color: 'var(--text-main, #111928)',
    margin: '0 0 10px',
  },
  description: {
    fontSize: '15px',
    color: 'var(--text-sec, #4B5563)',
    lineHeight: 1.6,
    margin: '0 0 24px',
  },
  button: {
    display: 'inline-block',
    padding: '12px 28px',
    background: 'var(--primary, #166534)',
    color: '#fff',
    borderRadius: 'var(--radius-md, 10px)',
    fontSize: '14px',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 250ms ease',
    boxShadow: 'var(--shadow-btn, 0 2px 8px rgba(10,110,85,0.18))',
  },
};

export default EmptyState;
