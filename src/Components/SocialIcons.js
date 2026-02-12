import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const SocialIcons = () => {
  const styles = {
    sidebar: {
      position: 'fixed',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000,
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50px',
      height: '50px',
      color: 'white',
      fontSize: '1.4rem',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
  };

  const iconColors = {
    facebook: '#3b5998',
    instagram: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    youtube: '#ff0000',
    whatsapp: '#25d366',
    map: '#4285f4',
  };

  return (
    <div style={styles.sidebar}>
      <a href="https://facebook.com" style={{...styles.icon, background: iconColors.facebook}}><FaFacebook /></a>
      <a href="https://instagram.com" style={{...styles.icon, background: iconColors.instagram}}><FaInstagram /></a>
      <a href="https://youtube.com" style={{...styles.icon, background: iconColors.youtube}}><FaYoutube /></a>
      <a href="https://wa.me/919876543210" style={{...styles.icon, background: iconColors.whatsapp}}><FaWhatsapp /></a>
      <a href="https://maps.google.com" style={{...styles.icon, background: iconColors.map}}><FaMapMarkerAlt /></a>
    </div>
  );
};

export default SocialIcons;