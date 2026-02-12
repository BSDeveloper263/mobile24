import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: 'white',
      padding: '4rem 2rem 1rem',
      marginTop: '4rem',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '3rem',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    logoIcon: { fontSize: '2rem' },
    logoText: {
      fontSize: '1.8rem',
      margin: 0,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    desc: { color: '#aaa', lineHeight: 1.6, marginBottom: '1.5rem' },
    socialContainer: { display: 'flex', gap: '1rem' },
    socialIcon: {
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      color: 'white',
      fontSize: '1.2rem',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    sectionTitle: {
      fontSize: '1.3rem',
      marginBottom: '1.5rem',
      paddingBottom: '0.5rem',
      borderBottom: '3px solid #667eea',
      display: 'inline-block',
    },
    list: { listStyle: 'none', padding: 0 },
    listItem: { marginBottom: '0.8rem' },
    link: { color: '#aaa', textDecoration: 'none' },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      color: '#aaa',
      marginBottom: '1rem',
    },
    bottom: {
      textAlign: 'center',
      paddingTop: '2rem',
      marginTop: '3rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#888',
      fontSize: '0.9rem',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>📱</span>
            <h2 style={styles.logoText}>Mobiles24</h2>
          </div>
          <p style={styles.desc}>Your trusted destination for the latest smartphones.</p>
          <div style={styles.socialContainer}>
            <a href="https://facebook.com" style={styles.socialIcon}><FaFacebook /></a>
            <a href="https://instagram.com" style={styles.socialIcon}><FaInstagram /></a>
            <a href="https://youtube.com" style={styles.socialIcon}><FaYoutube /></a>
            <a href="https://maps.google.com" style={styles.socialIcon}><FaMapMarkerAlt /></a>
          </div>
        </div>

        <div>
          <h3 style={styles.sectionTitle}>Quick Links</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><Link to="/" style={styles.link}>Home</Link></li>
            <li style={styles.listItem}><Link to="/" style={styles.link}>All Brands</Link></li>
            <li style={styles.listItem}><Link to="/" style={styles.link}>Deals</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={styles.sectionTitle}>Brands</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><Link to="/brand/apple" style={styles.link}>Apple</Link></li>
            <li style={styles.listItem}><Link to="/brand/samsung" style={styles.link}>Samsung</Link></li>
            <li style={styles.listItem}><Link to="/brand/oneplus" style={styles.link}>OnePlus</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={styles.sectionTitle}>Contact</h3>
          <p style={styles.contactItem}><FaMapMarkerAlt color="#667eea" /> Delhi, India</p>
          <p style={styles.contactItem}><FaPhone color="#667eea" /> +91 98765 43210</p>
          <p style={styles.contactItem}><FaEnvelope color="#667eea" /> support@mobiles24.com</p>
        </div>
      </div>
      <div style={styles.bottom}>
        <p>© 2024 Mobiles24. All rights reserved. Made with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;