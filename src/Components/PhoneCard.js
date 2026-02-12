import React, { useState } from 'react';
import { getBrand } from '../data/phones';

const PhoneCard = ({ phone }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const brand = getBrand(phone.brand);

  const styles = {
    card: {
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: isHovered ? '0 15px 30px rgba(102, 126, 234, 0.25)' : '0 5px 15px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
      position: 'relative',
      maxWidth: '280px',
    },
    badge: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '0.25rem 0.6rem',
      borderRadius: '15px',
      fontSize: '0.65rem',
      fontWeight: '600',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      gap: '0.2rem',
    },
    imageContainer: {
      position: 'relative',
      height: '160px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    image: {
      maxWidth: '60%',
      maxHeight: '80%',
      objectFit: 'contain',
      transition: 'transform 0.3s ease',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(102, 126, 234, 0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    quickViewBtn: {
      background: 'white',
      color: '#667eea',
      border: 'none',
      padding: '0.5rem 1.2rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer',
    },
    content: {
      padding: '1rem',
    },
    title: {
      fontSize: '0.9rem',
      color: '#333',
      marginBottom: '0.3rem',
      fontWeight: '700',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    price: {
      fontSize: '1.1rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '0.6rem',
    },
    specItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      padding: '0.2rem 0',
      borderBottom: '1px solid #f0f0f0',
      fontSize: '0.7rem',
      color: '#666',
    },
    actions: {
      display: 'flex',
      gap: '0.5rem',
      marginTop: '0.8rem',
    },
    buyBtn: {
      flex: 1,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      padding: '0.5rem',
      borderRadius: '8px',
      fontSize: '0.75rem',
      fontWeight: '600',
      cursor: 'pointer',
    },
    compareBtn: {
      flex: 1,
      background: 'transparent',
      color: '#667eea',
      border: '2px solid #667eea',
      padding: '0.5rem',
      borderRadius: '8px',
      fontSize: '0.75rem',
      fontWeight: '600',
      cursor: 'pointer',
    },
  };

  return (
    <div 
      style={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.badge}>
        <span>{brand?.logo}</span>
        <span>{brand?.name}</span>
      </div>
      
      <div style={styles.imageContainer}>
        <img 
          src={imgError ? `https://via.placeholder.com/200x200/667eea/ffffff?text=${encodeURIComponent(phone.name)}` : phone.image} 
          alt={phone.name} 
          style={styles.image}
          onError={() => setImgError(true)}
        />
        {isHovered && (
          <div style={styles.overlay}>
            <button style={styles.quickViewBtn}>Quick View</button>
          </div>
        )}
      </div>
      
      <div style={styles.content}>
        <h3 style={styles.title}>{phone.name}</h3>
        <p style={styles.price}>{phone.price}</p>
        
        <div>
          <div style={styles.specItem}>📱 {phone.display}</div>
          <div style={styles.specItem}>⚡ {phone.processor}</div>
          <div style={styles.specItem}>💾 {phone.ram}</div>
          <div style={{...styles.specItem, borderBottom: 'none'}}>🔋 {phone.battery}</div>
        </div>
        
        <div style={styles.actions}>
          <button style={styles.buyBtn}>Buy Now</button>
          <button style={styles.compareBtn}>Compare</button>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;