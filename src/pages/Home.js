import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { brands, phones, searchPhones } from '../data/phones';
import PhoneCard from '../Components/PhoneCard';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showAllPhones, setShowAllPhones] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPhoneIndex, setCurrentPhoneIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 
  
  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchResults(query.trim() ? searchPhones(query) : []);
  };

  const getFilteredPhones = () => {
    const filtered = selectedCategory === 'all' ? phones : phones.filter(p => p.brand === selectedCategory);
    return showAllPhones ? filtered : filtered.slice(0, isMobile ? 6 : 12);
  };

  // ==================== HIGH-QUALITY HERO IMAGES ====================
  const heroImages = {
    main: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1678911825544-bc3d574b9a8f?w=600&auto=format&fit=crop&q=80',
      'https://www.oneplus.com/content/dam/oneplus/na/2025/nav/Nav15RCharcoalBlack.png',
      'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1621849400072-f554417f7051?w=600&auto=format&fit=crop&q=80',
    ],
    float1: [
      'https://images.unsplash.com/photo-1632661674596-df8be1a1aeb0?w=400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598965402089-897ce52e8355?w=400&auto=format&fit=crop&q=80',
    ],
    float2: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop&q=80',
    ],
    float3: [
      'https://images.unsplash.com/photo-1678911825544-bc3d574b9a8f?w=400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1589492226559-37afefe66d2f?w=400&auto=format&fit=crop&q=80',
    ],
    float4: [
      'https://images.unsplash.com/photo-1621849400072-f554417f7051?w=400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=400&auto=format&fit=crop&q=80',
    ],
    icons: {
      apple: 'https://images.unsplash.com/photo-1611186872048-5d3a596dfcd1?w=100&auto=format&fit=crop&q=80',
      samsung: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&auto=format&fit=crop&q=80',
      google: 'https://images.unsplash.com/photo-1579562243430-4732ddb28291?w=100&auto=format&fit=crop&q=80',
      oneplus: 'https://images.unsplash.com/photo-1586056229547-51bc1c1bc9b8?w=100&auto=format&fit=crop&q=80',
    },
    bgPhone: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
  };


   // Auto rotate featured phones
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoneIndex((prev) => (prev + 1) % heroImages.main.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.main.length]);

  // const handleBrandClick = (brandId) => navigate(`/brand/${brandId}`);

  // Brand logos with images
  const brandLogos = {
    apple: '🍎',
    samsung: '📱',
    google: '🔵',
    oneplus: '⚡',
    xiaomi: '🇨🇳',
    motorola: '🦾',
    vivo: '📸',
    oppo: '✨',
  };

  // ==================== COMPLETE RESPONSIVE STYLES ====================
  const styles = {
    // Global responsive styles
    global: {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      body: {
        overflowX: 'hidden',
        width: '100%',
      },
    },

    // ==================== HERO SECTION - FULLY RESPONSIVE ====================
    hero: {
      background: 'linear-gradient(145deg, #ffffff 0%, #f5f9ff 50%, #edf2fa 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '1rem' : '2rem',
      paddingTop: isMobile ? '80px' : '2rem',
    },
    gradientOrb1: {
      position: 'absolute',
      width: isMobile ? '400px' : '800px',
      height: isMobile ? '400px' : '800px',
      borderRadius: '50%',
      background: `url('https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&auto=format&fit=crop&q=80') center/cover`,
      opacity: '0.03',
      top: isMobile ? '-150px' : '-300px',
      right: isMobile ? '-100px' : '-200px',
      animation: 'pulseSlow 12s ease-in-out infinite',
    },
    gradientOrb2: {
      position: 'absolute',
      width: isMobile ? '350px' : '700px',
      height: isMobile ? '350px' : '700px',
      borderRadius: '50%',
      background: `url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80') center/cover`,
      opacity: '0.02',
      bottom: isMobile ? '-150px' : '-250px',
      left: isMobile ? '-100px' : '-200px',
      animation: 'pulseSlow 15s ease-in-out infinite',
    },
    gridPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        linear-gradient(rgba(79, 70, 229, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(79, 70, 229, 0.03) 1px, transparent 1px)
      `,
      backgroundSize: isMobile ? '30px 30px' : '50px 50px',
    },
    heroContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
      gap: isMobile ? '2rem' : '3rem',
      alignItems: 'center',
      position: 'relative',
      zIndex: 20,
      width: '100%',
    },
    heroContent: {
      color: '#0f172a',
      textAlign: isMobile ? 'center' : 'left',
      padding: isMobile ? '0 0.5rem' : '0',
    },
    heroBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'flex-start',
      gap: '0.7rem',
      background: 'white',
      backdropFilter: 'blur(10px)',
      border: '1px solid #e0e7ff',
      padding: isMobile ? '0.5rem 1.2rem' : '0.6rem 1.4rem',
      borderRadius: '60px',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      color: '#4f46e5',
      fontWeight: '700',
      boxShadow: '0 8px 20px rgba(79, 70, 229, 0.08)',
    },
    heroTitle: {
      fontSize: isMobile ? 'clamp(2rem, 8vw, 2.5rem)' : 'clamp(2.5rem, 6vw, 4rem)',
      fontWeight: '800',
      marginBottom: isMobile ? '1rem' : '1.5rem',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    titleLine1: {
      display: 'block',
      color: '#0f172a',
    },
    titleLine2: {
      display: 'block',
      background: 'linear-gradient(145deg, #4f46e5, #7c3aed, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    titleLine3: {
      display: 'block',
      background: 'linear-gradient(145deg, #eab308, #f97316)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    heroSubtitle: {
      fontSize: isMobile ? '1rem' : '1.15rem',
      color: '#475569',
      marginBottom: isMobile ? '2rem' : '2.5rem',
      lineHeight: 1.7,
      maxWidth: isMobile ? '100%' : '520px',
      marginLeft: isMobile ? 'auto' : '0',
      marginRight: isMobile ? 'auto' : '0',
    },

    // ==================== SEARCH - FULLY RESPONSIVE ====================
    searchContainer: {
      position: 'relative',
      maxWidth: isMobile ? '100%' : '540px',
      marginBottom: isMobile ? '2rem' : '2.5rem',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    searchBox: {
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '70px',
      padding: isMobile ? '0.2rem' : '0.4rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(0,0,0,0.02)',
    },
    searchIcon: {
      padding: isMobile ? '0 0.5rem' : '0 0.8rem 0 1.2rem',
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      color: '#94a3b8',
    },
    searchInput: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: '#0f172a',
      fontSize: isMobile ? '0.9rem' : '1rem',
      padding: isMobile ? '0.7rem 0' : '0.9rem 0',
      width: '100%',
      '::placeholder': {
        color: '#94a3b8',
        fontSize: isMobile ? '0.85rem' : '1rem',
      },
    },
    searchBtn: {
      background: 'linear-gradient(145deg, #4f46e5, #7c3aed)',
      border: 'none',
      padding: isMobile ? '0.6rem 1.2rem' : '0.8rem 2.2rem',
      borderRadius: '50px',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      transition: 'all 0.2s',
      boxShadow: '0 8px 20px rgba(79, 70, 229, 0.25)',
      whiteSpace: 'nowrap',
    },
    searchDropdown: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: 'white',
      borderRadius: isMobile ? '16px' : '24px',
      marginTop: '0.8rem',
      boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
      maxHeight: isMobile ? '320px' : '380px',
      overflowY: 'auto',
      zIndex: 100,
      border: '1px solid #f1f5f9',
    },
    searchItem: {
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '0.8rem 1rem' : '1rem 1.2rem',
      gap: isMobile ? '0.8rem' : '1rem',
      cursor: 'pointer',
      borderBottom: '1px solid #f1f5f9',
      color: '#0f172a',
      transition: 'background 0.2s',
      ':hover': {
        background: '#f8fafc',
      },
    },
    searchItemImg: {
      width: isMobile ? '48px' : '56px',
      height: isMobile ? '48px' : '56px',
      objectFit: 'cover',
      borderRadius: isMobile ? '12px' : '16px',
      background: '#f8fafc',
      border: '1px solid #e2e8f0',
    },

    // ==================== CTA & STATS - RESPONSIVE ====================
    ctaContainer: {
      display: 'flex',
      gap: isMobile ? '0.8rem' : '1.2rem',
      marginBottom: isMobile ? '2rem' : '3rem',
      flexWrap: 'wrap',
      justifyContent: isMobile ? 'center' : 'flex-start',
    },
    ctaBtn: {
      padding: isMobile ? '0.7rem 1.5rem' : '0.9rem 2.2rem',
      borderRadius: '60px',
      fontWeight: '600',
      fontSize: isMobile ? '0.9rem' : '1rem',
      cursor: 'pointer',
      transition: 'all 0.25s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      border: 'none',
    },
    ctaPrimary: {
      background: 'linear-gradient(145deg, #4f46e5, #7c3aed)',
      color: 'white',
      boxShadow: '0 12px 30px rgba(79, 70, 229, 0.3)',
    },
    ctaSecondary: {
      background: 'white',
      border: '2px solid #e2e8f0',
      color: '#4f46e5',
    },
    statsContainer: {
      display: 'flex',
      gap: isMobile ? '1rem' : '2rem',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'flex-start',
    },
    statItem: {
      textAlign: 'center',
    },
    statNumber: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: '800',
      background: 'linear-gradient(145deg, #0f172a, #334155)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'block',
      lineHeight: 1.2,
    },
    statLabel: {
      fontSize: isMobile ? '0.7rem' : '0.8rem',
      color: '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      fontWeight: '600',
    },
    statDivider: {
      width: '1px',
      height: isMobile ? '35px' : '45px',
      background: '#e2e8f0',
    },

    // ==================== PHONE SHOWCASE - HIDE ON MOBILE ====================
    heroShowcase: {
      position: 'relative',
      height: isMobile ? '0' : '620px',
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainPhone: {
      width: '270px',
      height: '400px',
      background: 'white',
      borderRadius: '45px',
      padding: '8px',
      boxShadow: '0 40px 80px rgba(0,0,0,0.06), 0 0 0 2px white, 0 0 0 5px rgba(79,70,229,0.08)',
      animation: 'float 6s ease-in-out infinite',
      zIndex: 15,
      position: 'relative',
    },
    phoneScreen: {
      width: '100%',
      height: '100%',
      background: '#ffffff',
      borderRadius: '38px',
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid #f1f5f9',
    },
    phoneImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'opacity 0.5s ease',
      display: 'block',
    },
    phoneNotch: {
      position: 'absolute',
      top: '12px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '75px',
      height: '24px',
      background: '#0f172a',
      borderRadius: '18px',
      zIndex: 20,
      border: '2px solid white',
    },
    phoneBrand: {
      position: 'absolute',
      bottom: '18px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(10px)',
      padding: '0.5rem 1.3rem',
      borderRadius: '24px',
      color: '#0f172a',
      fontSize: '0.8rem',
      fontWeight: '700',
      zIndex: 25,
      whiteSpace: 'nowrap',
      maxWidth: '85%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      border: '1px solid white',
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    },
    floatingPhone: {
      position: 'absolute',
      background: 'white',
      borderRadius: '22px',
      padding: '5px',
      boxShadow: '0 30px 50px -12px rgba(0,0,0,0.12)',
      border: '2.5px solid white',
    },
    floatingPhone1: {
      width: '85px',
      height: '120px',
      top: '20px',
      left: '-25px',
      animation: 'float 7s ease-in-out infinite',
      animationDelay: '-0.5s',
      zIndex: 12,
    },
    floatingPhone2: {
      width: '75px',
      height: '110px',
      top: '50px',
      right: '-10px',
      animation: 'float 8s ease-in-out infinite',
      animationDelay: '-1.2s',
      zIndex: 12,
    },
    floatingPhone3: {
      width: '70px',
      height: '100px',
      bottom: '60px',
      left: '-15px',
      animation: 'float 7.5s ease-in-out infinite',
      animationDelay: '-2s',
      zIndex: 12,
    },
    floatingPhone4: {
      width: '78px',
      height: '113px',
      bottom: '40px',
      right: '-15px',
      animation: 'float 6.5s ease-in-out infinite',
      animationDelay: '-0.8s',
      zIndex: 12,
    },
    floatingPhoneScreen: {
      width: '100%',
      height: '100%',
      borderRadius: '18px',
      overflow: 'hidden',
      background: 'white',
    },
    floatingPhoneImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    priceTag: {
      position: 'absolute',
      top: '100px',
      right: '-20px',
      background: 'linear-gradient(145deg, #eab308, #f97316)',
      padding: '0.6rem 1.4rem',
      borderRadius: '40px',
      color: 'white',
      fontWeight: '800',
      fontSize: '0.9rem',
      boxShadow: '0 15px 30px rgba(234,179,8,0.25)',
      animation: 'pulse 2.5s ease-in-out infinite',
      zIndex: 30,
      border: '2px solid white',
      letterSpacing: '0.5px',
    },
    floatingIcon: {
      position: 'absolute',
      background: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
      border: '2px solid white',
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      fontWeight: '600',
      overflow: 'hidden',
    },
    icon1: {
      width: isMobile ? '40px' : '52px',
      height: isMobile ? '40px' : '52px',
      top: isMobile ? '10px' : '15px',
      right: isMobile ? '20px' : '70px',
      animation: 'bounce 4s ease-in-out infinite',
      background: 'linear-gradient(145deg, #f43f5e, #e11d48)',
      color: 'white',
    },
    icon2: {
      width: isMobile ? '36px' : '48px',
      height: isMobile ? '36px' : '48px',
      bottom: isMobile ? '120px' : '150px',
      right: isMobile ? '30px' : '90px',
      animation: 'bounce 5s ease-in-out infinite',
      animationDelay: '-1s',
      background: 'linear-gradient(145deg, #3b82f6, #2563eb)',
      color: 'white',
    },
    icon3: {
      width: isMobile ? '34px' : '46px',
      height: isMobile ? '34px' : '46px',
      bottom: isMobile ? '30px' : '45px',
      left: isMobile ? '20px' : '70px',
      animation: 'bounce 4.5s ease-in-out infinite',
      animationDelay: '-2s',
      background: 'linear-gradient(145deg, #10b981, #059669)',
      color: 'white',
    },
    icon4: {
      width: isMobile ? '38px' : '50px',
      height: isMobile ? '38px' : '50px',
      top: isMobile ? '120px' : '140px',
      left: isMobile ? '-10px' : '-30px',
      animation: 'bounce 5.5s ease-in-out infinite',
      animationDelay: '-0.8s',
      background: 'linear-gradient(145deg, #8b5cf6, #7c3aed)',
      color: 'white',
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: isMobile ? '1rem' : '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      display: isMobile ? 'none' : 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.6rem',
      color: '#475569',
      fontSize: '0.75rem',
      animation: 'bounceSoft 2.2s ease-in-out infinite',
      zIndex: 30,
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },

    // ==================== PHONES SECTION - FULLY RESPONSIVE ====================
    section: { 
      padding: isMobile ? '3rem 1rem' : '4rem 2rem', 
      maxWidth: '1400px', 
      margin: '0 auto',
    },
    sectionTitle: { 
      fontSize: isMobile ? '1.8rem' : '2.2rem', 
      fontWeight: '800', 
      textAlign: 'center', 
      marginBottom: '0.5rem', 
      color: '#0f172a',
      padding: isMobile ? '0 0.5rem' : '0',
    },
    sectionSubtitle: { 
      textAlign: 'center', 
      color: '#64748b', 
      marginBottom: isMobile ? '1.5rem' : '3rem',
      fontSize: isMobile ? '0.95rem' : '1rem',
      padding: isMobile ? '0 1rem' : '0',
    },
    
    // ==================== FILTER BUTTONS - MOBILE FRIENDLY ====================
    filterContainer: { 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '0.6rem', 
      justifyContent: 'center', 
      marginBottom: '2rem',
      padding: isMobile ? '0 0.5rem' : '0',
    },
    filterBtn: {
      padding: isMobile ? '0.5rem 1rem' : '0.7rem 1.5rem',
      border: '2px solid #e2e8f0',
      borderRadius: '50px',
      background: 'white',
      cursor: 'pointer',
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      transition: 'all 0.3s',
      color: '#475569',
      whiteSpace: 'nowrap',
    },
    filterBtnActive: {
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      color: 'white',
      border: '2px solid transparent',
    },
    
    // ==================== PHONES GRID - RESPONSIVE ====================
    phonesGrid: { 
      display: 'grid', 
      gridTemplateColumns: isMobile 
        ? 'repeat(auto-fill, minmax(160px, 1fr))' 
        : 'repeat(auto-fill, minmax(280px, 1fr))', 
      gap: isMobile ? '1rem' : '1.5rem',
      padding: isMobile ? '0 0.5rem' : '0',
    },
    showMoreContainer: { 
      textAlign: 'center', 
      marginTop: '2rem',
    },
    showMoreBtn: {
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      color: 'white',
      border: 'none',
      padding: isMobile ? '0.8rem 2rem' : '1rem 3rem',
      borderRadius: '50px',
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: isMobile ? '90%' : 'auto',
      maxWidth: '300px',
    },
  };

  // ==================== KEYFRAMES - SAME FOR ALL DEVICES ====================
  const keyframes = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    @keyframes pulseSlow {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.05); }
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes bounceSoft {
      0%, 100% { transform: translateX(-50%) translateY(0); }
      50% { transform: translateX(-50%) translateY(-5px); }
    }
    @keyframes scrollWheel {
      0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
      50% { transform: translateX(-50%) translateY(10px); opacity: 0.3; }
    }
    
    /* Extra Small Devices */
    @media (max-width: 480px) {
      .phones-grid {
        grid-template-columns: 1fr !important;
      }
    }
    
    /* Touch device optimizations */
    @media (hover: none) and (pointer: coarse) {
      button, .clickable {
        min-height: 44px;
        min-width: 44px;
      }
    }
  `;

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <style>{keyframes}</style>

      {/* ==================== HERO SECTION ==================== */}
      <section style={styles.hero}>
        <div style={styles.gradientOrb1}></div>
        <div style={styles.gradientOrb2}></div>
        <div style={styles.gridPattern}></div>

        <div style={styles.heroContainer}>
          {/* LEFT CONTENT */}
          <div style={styles.heroContent}>
            <div style={styles.heroBadge}>
              <span style={{fontSize: isMobile ? '1rem' : '1.2rem'}}>⚡</span>
              <span>India's #1 Trusted Store</span>
            </div>
            
            <h1 style={styles.heroTitle}>
              <span style={styles.titleLine1}>Find Your</span>
              <span style={styles.titleLine2}>Perfect</span>
              <span style={styles.titleLine3}>Smartphone</span>
            </h1>
            
            <p style={styles.heroSubtitle}>
              Discover <strong style={{color:'#4f46e5'}}>{phones.length}+ models</strong> from top brands. 
              {!isMobile && ' Compare specs, read reviews & grab the best deal – 100% genuine.'}
            </p>

            {/* SEARCH */}
            <div style={styles.searchContainer}>
              <div style={styles.searchBox}>
                <span style={styles.searchIcon}>🔍</span>
                <input
                  type="text"
                  placeholder={isMobile ? "Search phones..." : "Search iPhone 15, Samsung S23 Ultra..."}
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  style={styles.searchInput}
                />
                <button style={styles.searchBtn}>{isMobile ? 'Go' : 'Search'}</button>
              </div>
              
              {searchResults.length > 0 && (
                <div style={styles.searchDropdown}>
                  {searchResults.slice(0, 5).map(phone => (
                    <div 
                      key={phone.id} 
                      style={styles.searchItem} 
                      onClick={() => { 
                        navigate(`/brand/${phone.brand}`); 
                        setSearchQuery(''); 
                        setSearchResults([]); 
                      }}
                    >
                      <img 
                        src={phone.image || heroImages.main[0]} 
                        alt={phone.name}
                        style={styles.searchItemImg}
                        onError={(e) => e.target.src = heroImages.main[0]}
                      />
                      <div style={{flex: 1, minWidth: 0}}>
                        <div style={{fontWeight: '700', color: '#0f172a', fontSize: isMobile ? '0.9rem' : '1rem'}}>
                          {phone.name}
                        </div>
                        {!isMobile && (
                          <div style={{fontSize: '0.8rem', color: '#64748b'}}>
                            {phone.ram} • {phone.processor?.slice(0,15)}
                          </div>
                        )}
                      </div>
                      <div style={{fontWeight: '800', color: '#4f46e5', fontSize: isMobile ? '0.9rem' : '1rem'}}>
                        {phone.price}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA BUTTONS */}
            <div style={styles.ctaContainer}>
              <button 
                style={{...styles.ctaBtn, ...styles.ctaPrimary}}
                onClick={() => document.getElementById('all-phones')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span style={{fontSize: isMobile ? '1.1rem' : '1.2rem'}}>🛒</span> 
                {isMobile ? 'Shop' : 'Shop Now'}
              </button>
              <button 
                style={{...styles.ctaBtn, ...styles.ctaSecondary}}
                onClick={() => document.getElementById('all-phones')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span style={{fontSize: isMobile ? '1.1rem' : '1.2rem'}}>📱</span> 
                {isMobile ? 'View' : 'View All'}
              </button>
            </div>

            {/* STATS - Responsive */}
            <div style={styles.statsContainer}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>{brands.length}+</span>
                <span style={styles.statLabel}>Brands</span>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>{phones.length}+</span>
                <span style={styles.statLabel}>Phones</span>
              </div>
              {!isMobile && (
                <>
                  <div style={styles.statDivider}></div>
                  <div style={styles.statItem}>
                    <span style={styles.statNumber}>24/7</span>
                    <span style={styles.statLabel}>Support</span>
                  </div>
                  <div style={styles.statDivider}></div>
                  <div style={styles.statItem}>
                    <span style={styles.statNumber}>100%</span>
                    <span style={styles.statLabel}>Genuine</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* RIGHT SIDE - Hidden on mobile */}
          <div style={styles.heroShowcase} className="hero-showcase">
            <div style={styles.glowRing}></div>
            <div style={styles.glowRing2}></div>
            
            <div style={{...styles.floatingIcon, ...styles.icon1}}>🍎</div>
            <div style={{...styles.floatingIcon, ...styles.icon2}}>📱</div>
            <div style={{...styles.floatingIcon, ...styles.icon3}}>⚡</div>
            <div style={{...styles.floatingIcon, ...styles.icon4}}>🔥</div>

            <div style={styles.priceTag}>From ₹9,999</div>

            {/* Floating Phones */}
            <div style={{...styles.floatingPhone, ...styles.floatingPhone1}}>
              <div style={styles.floatingPhoneScreen}>
                <img 
                  src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&auto=format&fit=crop&q=90"
                  alt="iPhone 15 Pro"
                  style={styles.floatingPhoneImg}
                />
              </div>
            </div>
            
            <div style={{...styles.floatingPhone, ...styles.floatingPhone2}}>
              <div style={styles.floatingPhoneScreen}>
                <img 
                  src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop&q=90"
                  alt="Samsung S23 Ultra"
                  style={styles.floatingPhoneImg}
                />
              </div>
            </div>
            
            <div style={{...styles.floatingPhone, ...styles.floatingPhone3}}>
              <div style={styles.floatingPhoneScreen}>
                <img 
                  src="https://m.media-amazon.com/images/I/31y93k7DsXL._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="Google Pixel 8 Pro"
                  style={styles.floatingPhoneImg}
                />
              </div>
            </div>
            
            <div style={{...styles.floatingPhone, ...styles.floatingPhone4}}>
              <div style={styles.floatingPhoneScreen}>
                <img 
                  src="https://www.oneplus.com/content/dam/oneplus/na/2025/nav/Nav15RCharcoalBlack.png"
                  alt="OnePlus 11"
                  style={styles.floatingPhoneImg}
                />
              </div>
            </div>

            {/* MAIN PHONE */}
            <div style={styles.mainPhone}>
              <div style={styles.phoneScreen}>
                <div style={styles.phoneNotch}></div>
                <img 
                  key={currentPhoneIndex}
                  src={heroImages.main[currentPhoneIndex % heroImages.main.length]}
                  alt="Featured Smartphone"
                  style={styles.phoneImage}
                />
                <div style={styles.phoneBrand}>
                  {currentPhoneIndex === 0 ? 'iPhone 15 Pro' :
                   currentPhoneIndex === 1 ? 'Samsung S23 Ultra' :
                   currentPhoneIndex === 2 ? 'Pixel 8 Pro' :
                   currentPhoneIndex === 3 ? 'OnePlus 11' :
                   currentPhoneIndex === 4 ? 'Xiaomi 13 Pro' : 'Motorola Edge 50 Ultra'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div style={styles.scrollIndicator}>
          <div style={styles.scrollMouse}>
            <div style={styles.scrollWheel}></div>
          </div>
          <span>EXPLORE</span>
        </div>
      </section>

      {/* ==================== ALL PHONES SECTION ==================== */}
      <section id="all-phones" style={styles.section}>
        <h2 style={styles.sectionTitle}>📱 {isMobile ? 'All Phones' : 'All Smartphones'}</h2>
        <p style={styles.sectionSubtitle}>
          {isMobile ? `${phones.length}+ smartphones` : `Browse ${phones.length}+ smartphones from top brands`}
        </p>
        
        {/* Filter Buttons - Horizontal scroll on mobile */}
        <div style={styles.filterContainer}>
          <button 
            style={{...styles.filterBtn, ...(selectedCategory === 'all' ? styles.filterBtnActive : {})}} 
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          {brands.slice(0, isMobile ? 6 : brands.length).map(brand => (
            <button 
              key={brand.id} 
              style={{...styles.filterBtn, ...(selectedCategory === brand.id ? styles.filterBtnActive : {})}} 
              onClick={() => setSelectedCategory(brand.id)}
            >
              {brandLogos[brand.id] || '📱'} {isMobile ? '' : brand.name}
            </button>
          ))}
          {isMobile && brands.length > 6 && (
            <button 
              style={styles.filterBtn}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              More ↓
            </button>
          )}
        </div>

        {/* Mobile more brands dropdown */}
        {isMobileMenuOpen && isMobile && (
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', marginBottom: '1rem'}}>
            {brands.slice(6).map(brand => (
              <button 
                key={brand.id} 
                style={{...styles.filterBtn, ...(selectedCategory === brand.id ? styles.filterBtnActive : {})}} 
                onClick={() => {
                  setSelectedCategory(brand.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {brandLogos[brand.id] || '📱'} {brand.name}
              </button>
            ))}
          </div>
        )}

        {/* Phones Grid */}
        <div style={styles.phonesGrid}>
          {getFilteredPhones().map(phone => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {!showAllPhones && (selectedCategory === 'all' ? phones.length : phones.filter(p => p.brand === selectedCategory).length) > (isMobile ? 6 : 12) && (
          <div style={styles.showMoreContainer}>
            <button style={styles.showMoreBtn} onClick={() => setShowAllPhones(true)}>
              {isMobile ? 'More Phones ↓' : 'Show All Phones ↓'}
            </button>
          </div>
        )}
        {showAllPhones && (
          <div style={styles.showMoreContainer}>
            <button style={styles.showMoreBtn} onClick={() => setShowAllPhones(false)}>
              {isMobile ? 'Show Less ↑' : 'Show Less ↑'}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;