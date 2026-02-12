import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 600;
  const isTablet = width <= 992;

  const styles = {
    footer: {
      background: "linear-gradient(135deg, #1a1a2e, #16213e)",
      color: "white",
      padding: "60px 20px 20px",
      marginTop: "60px",
    },
    container: {
      maxWidth: "1300px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
        ? "repeat(2, 1fr)"
        : "repeat(4, 1fr)",
      gap: "40px",
      textAlign: isMobile ? "center" : "left",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      justifyContent: isMobile ? "center" : "flex-start",
      gap: "10px",
      marginBottom: "15px",
    },
    logoText: {
      fontSize: "24px",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      margin: 0,
    },
    desc: {
      color: "#bbb",
      fontSize: "14px",
      lineHeight: "1.6",
    },
    sectionTitle: {
      marginBottom: "15px",
      borderBottom: "2px solid #667eea",
      display: "inline-block",
      paddingBottom: "5px",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      marginBottom: "8px",
    },
    link: {
      color: "#bbb",
      textDecoration: "none",
      fontSize: "14px",
    },
    socialContainer: {
      marginTop: "15px",
      display: "flex",
      justifyContent: isMobile ? "center" : "flex-start",
      gap: "12px",
    },
    socialIcon: {
      background: "rgba(255,255,255,0.1)",
      padding: "10px",
      borderRadius: "50%",
      color: "white",
      fontSize: "18px",
      textDecoration: "none",
      transition: "0.3s",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: isMobile ? "center" : "flex-start",
      gap: "8px",
      color: "#bbb",
      fontSize: "14px",
      marginBottom: "10px",
    },
    bottom: {
      textAlign: "center",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      marginTop: "40px",
      paddingTop: "20px",
      fontSize: "13px",
      color: "#aaa",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo Section */}
        <div>
          <div style={styles.logo}>
            <span style={{ fontSize: "28px" }}>📱</span>
            <h2 style={styles.logoText}>Mobiles24</h2>
          </div>
          <p style={styles.desc}>
            Your trusted destination for the latest smartphones at the best prices.
          </p>

          <div style={styles.socialContainer}>
            <a href="https://facebook.com" style={styles.socialIcon}><FaFacebook /></a>
            <a href="https://instagram.com" style={styles.socialIcon}><FaInstagram /></a>
            <a href="https://youtube.com" style={styles.socialIcon}><FaYoutube /></a>
            <a href="https://maps.google.com" style={styles.socialIcon}><FaMapMarkerAlt /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={styles.sectionTitle}>Quick Links</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><Link to="/" style={styles.link}>Home</Link></li>
            <li style={styles.listItem}><Link to="/">All Brands</Link></li>
            <li style={styles.listItem}><Link to="/">Deals</Link></li>
          </ul>
        </div>

        {/* Brands */}
        <div>
          <h3 style={styles.sectionTitle}>Brands</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><Link to="/brand/apple" style={styles.link}>Apple</Link></li>
            <li style={styles.listItem}><Link to="/brand/samsung" style={styles.link}>Samsung</Link></li>
            <li style={styles.listItem}><Link to="/brand/oneplus" style={styles.link}>OnePlus</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 style={styles.sectionTitle}>Contact</h3>
          <p style={styles.contactItem}><FaMapMarkerAlt color="#667eea" />Dhamtari chhattisgarh india</p>
          <p style={styles.contactItem}><FaPhone color="#667eea" />788828895</p>
          <p style={styles.contactItem}><FaEnvelope color="#667eea" /> support@mobiles24.com</p>
        </div>
      </div>

      <div style={styles.bottom}>
        © 2024 Mobiles24. All rights reserved. Made with ❤️
      </div>
    </footer>
  );
};

export default Footer;