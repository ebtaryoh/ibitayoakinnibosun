import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: scrolled ? '16px 0' : '24px 0',
      background: scrolled ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800 }}>IA.</a>
        
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-menu">
          <a href="#about" style={{ fontWeight: 500 }}>About</a>
          <a href="#projects" style={{ fontWeight: 500 }}>Projects</a>
          <a href="/resume.pdf" download style={{ fontWeight: 500, color: 'var(--accent-secondary)' }}>Download CV</a>
          <a href="#contact" className="bg-gradient" style={{
            padding: '10px 24px', borderRadius: '30px', color: '#fff', fontWeight: 600, transition: 'transform 0.2s ease'
          }}>Let's Talk</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
