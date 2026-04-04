import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Error boundary — catches runtime errors and shows a friendly fallback UI.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.wrapper}>
          <div style={styles.card}>
            <div style={styles.iconCircle}>
              <span style={styles.icon}>⚠️</span>
            </div>
            <h2 style={styles.title}>No available data right now</h2>
            <p style={styles.description}>
              An unexpected error occurred. Don't worry — your data is safe.
              Try refreshing the page or go back to the homepage.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre style={styles.errorDetail}>
                {this.state.error.toString()}
              </pre>
            )}
            <div style={styles.actions}>
              <button onClick={this.handleReset} style={styles.primaryBtn}>
                Try again
              </button>
              <Link to="/" style={styles.secondaryBtn} onClick={this.handleReset}>
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '24px',
    background: 'var(--bg-page, #F7F9FC)',
  },
  card: {
    background: '#fff',
    borderRadius: 'var(--radius-xl, 20px)',
    padding: '48px 40px',
    textAlign: 'center',
    maxWidth: '480px',
    width: '100%',
    boxShadow: 'var(--shadow-lg, 0 8px 30px rgba(10,110,85,0.12))',
  },
  iconCircle: {
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    background: 'var(--error-bg, #FEF2F2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
  },
  icon: {
    fontSize: '32px',
  },
  title: {
    fontSize: '22px',
    fontWeight: 700,
    color: 'var(--text-main, #111928)',
    margin: '0 0 12px',
  },
  description: {
    fontSize: '15px',
    color: 'var(--text-sec, #4B5563)',
    lineHeight: 1.6,
    margin: '0 0 20px',
  },
  errorDetail: {
    background: 'var(--bg-muted, #F1F4F8)',
    padding: '12px 16px',
    borderRadius: 'var(--radius-md, 10px)',
    fontSize: '12px',
    color: 'var(--error, #DC2626)',
    textAlign: 'left',
    overflow: 'auto',
    maxHeight: '120px',
    marginBottom: '20px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  },
  actions: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    padding: '12px 28px',
    background: 'var(--primary, #166534)',
    color: '#fff',
    borderRadius: 'var(--radius-md, 10px)',
    border: 'none',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 250ms ease',
    boxShadow: 'var(--shadow-btn)',
  },
  secondaryBtn: {
    padding: '12px 28px',
    background: 'transparent',
    color: 'var(--primary, #166534)',
    borderRadius: 'var(--radius-md, 10px)',
    border: '1px solid var(--primary, #166534)',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 250ms ease',
  },
};

export default ErrorBoundary;
