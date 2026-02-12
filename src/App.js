import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SocialIcons from './Components/SocialIcons';
import Home from './pages/Home';
import BrandPhones from './pages/BrandPhones';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brand/:brand" element={<BrandPhones />} />
          </Routes>
        </main>
        <SocialIcons />
        <Footer />
      </div>
    </Router>
  );
}

export default App;