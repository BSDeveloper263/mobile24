import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const SocialIcons = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 600;
  const isTablet = width <= 992;

  const styles = {
    sidebar: {
      position: "fixed",
      right: isMobile ? "50%" : 0,
      bottom: isMobile ? 0 : "auto",
      top: isMobile ? "auto" : "50%",
      transform: isMobile ? "translateX(50%)" : "translateY(-50%)",
      display: "flex",
      flexDirection: isMobile ? "row" : "column",
      zIndex: 1000,
    },
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: isMobile ? "45px" : isTablet ? "48px" : "50px",
      height: isMobile ? "45px" : isTablet ? "48px" : "50px",
      color: "white",
      fontSize: isMobile ? "1.2rem" : "1.4rem",
      textDecoration: "none",
      transition: "all 0.3s ease",
    },
  };

  const iconColors = {
    facebook: "#3b5998",
    instagram:
      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    youtube: "#ff0000",
    whatsapp: "#25d366",
    map: "#4285f4",
  };

  return (
    <div style={styles.sidebar}>
      <a
        href="https://facebook.com"
        style={{ ...styles.icon, background: iconColors.facebook }}
      >
        <FaFacebook />
      </a>
      <a
        href="https://instagram.com"
        style={{ ...styles.icon, background: iconColors.instagram }}
      >
        <FaInstagram />
      </a>
      <a
        href="https://youtube.com"
        style={{ ...styles.icon, background: iconColors.youtube }}
      >
        <FaYoutube />
      </a>
      <a
        href="https://wa.me/919876543210"
        style={{ ...styles.icon, background: iconColors.whatsapp }}
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://maps.google.com"
        style={{ ...styles.icon, background: iconColors.map }}
      >
        <FaMapMarkerAlt />
      </a>
    </div>
  );
};

export default SocialIcons;