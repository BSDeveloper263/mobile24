import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const styles = {
    header: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logoLink: {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    logoIcon: {
      fontSize: '2rem',
    },
    logoText: {
      color: 'white',
      margin: 0,
      fontSize: '1.8rem',
      fontWeight: '800',
    },
    nav: {
      display: 'flex',
      gap: '1.5rem',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.8rem',
      fontWeight: '500',
      padding: '0.5rem 1rem',
      borderRadius: '25px',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logoLink}>
          <span style={styles.logoIcon}>📱</span>
          <h1 style={styles.logoText}>Mobiles24</h1>
        </Link>
        <nav style={styles.nav}>
         
          <Link to="/" style={styles.navLink}>❤️</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;