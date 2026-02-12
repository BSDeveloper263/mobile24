import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPhonesByBrand, getBrand } from '../data/phones';
import PhoneCard from '../Components/PhoneCard';

const BrandPhones = () => {
  const { brand } = useParams();
  const phones = getPhonesByBrand(brand);
  const brandData = getBrand(brand);

  const styles = {
    container: { padding: '2rem', maxWidth: '1400px', margin: '0 auto', paddingRight: '70px' },
    breadcrumb: { display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.95rem' },
    breadcrumbLink: { color: '#667eea', textDecoration: 'none' },
    header: { textAlign: 'center', marginBottom: '3rem' },
    title: { fontSize: '2.5rem', fontWeight: '800', color: '#333', marginBottom: '0.5rem' },
    titleHighlight: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    subtitle: { color: '#666', fontSize: '1.1rem', marginBottom: '1rem' },
    count: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '0.5rem 1.5rem',
      borderRadius: '25px',
      fontSize: '0.95rem',
    },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' },
    noPhones: {
      textAlign: 'center',
      padding: '4rem',
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    },
    backBtn: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '10px',
      textDecoration: 'none',
      fontWeight: '600',
      marginTop: '1rem',
    },
  };

  if (!brandData) {
    return (
      <div style={styles.noPhones}>
        <div style={{fontSize: '5rem', marginBottom: '1rem'}}>📱</div>
        <h2>Brand not found</h2>
        <Link to="/" style={styles.backBtn}>← Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.breadcrumb}>
        <Link to="/" style={styles.breadcrumbLink}>Home</Link>
        <span style={{color: '#999'}}>/</span>
        <span style={{color: '#333', fontWeight: '600'}}>{brandData.name}</span>
      </div>

      <div style={styles.header}>
        <div style={{fontSize: '4rem', marginBottom: '1rem'}}>{brandData.logo}</div>
        <h1 style={styles.title}>{brandData.name} <span style={styles.titleHighlight}>Smartphones</span></h1>
        <p style={styles.subtitle}>Explore the latest {brandData.name} phones</p>
        <div style={styles.count}><strong>{phones.length}</strong> phones available</div>
      </div>

      {phones.length > 0 ? (
        <div style={styles.grid}>
          {phones.map(phone => <PhoneCard key={phone.id} phone={phone} />)}
        </div>
      ) : (
        <div style={styles.noPhones}>
          <div style={{fontSize: '5rem', marginBottom: '1rem'}}>📱</div>
          <h2>No phones found</h2>
          <Link to="/" style={styles.backBtn}>← Back to Home</Link>
        </div>
      )}
    </div>
  );
};

export default BrandPhones;