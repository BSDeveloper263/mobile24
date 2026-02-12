import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 768;

  const styles = {
    header: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "1rem 2rem",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    },
    container: {
      maxWidth: "1400px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logoLink: {
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    logoIcon: {
      fontSize: "2rem",
    },
    logoText: {
      color: "white",
      margin: 0,
      fontSize: isMobile ? "1.4rem" : "1.8rem",
      fontWeight: "800",
    },
    nav: {
      display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      position: isMobile ? "absolute" : "static",
      top: isMobile ? "70px" : "auto",
      right: isMobile ? "20px" : "auto",
      background: isMobile ? "#764ba2" : "transparent",
      padding: isMobile ? "1rem" : "0",
      borderRadius: isMobile ? "10px" : "0",
      gap: "1.5rem",
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      padding: "0.5rem 1rem",
      borderRadius: "25px",
      transition: "0.3s",
    },
    hamburger: {
      display: isMobile ? "block" : "none",
      fontSize: "1.8rem",
      color: "white",
      cursor: "pointer",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logoLink}>
          <span style={styles.logoIcon}>📱</span>
          <h1 style={styles.logoText}>Mobiles24</h1>
        </Link>

        {/* Hamburger Icon */}
        {isMobile && (
          <div
            style={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        )}

        <nav style={styles.nav}>
         
          <Link to="/" style={styles.navLink}>❤️</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;