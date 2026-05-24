import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Close mobile menu on scroll
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Download CV', href: '/resume.pdf', download: true, accent: true },
  ];

  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: scrolled ? '16px 0' : '24px 0',
        background: scrolled || mobileMenuOpen ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled || mobileMenuOpen ? 'blur(16px)' : 'none',
        borderBottom: scrolled || mobileMenuOpen ? '1px solid var(--glass-border)' : 'none'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800, zIndex: 1100 }}>IA.</a>

          {/* Desktop Menu */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-menu">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                style={{
                  fontWeight: 500,
                  color: link.accent ? 'var(--accent-secondary)' : 'inherit'
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="bg-gradient" style={{
              padding: '10px 24px', borderRadius: '30px', color: '#fff', fontWeight: 600, transition: 'transform 0.2s ease'
            }}>Let's Talk</a>
          </div>

          {/* Hamburger Button — mobile only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hamburger-btn"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px',
              padding: '10px',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              zIndex: 1100,
              transition: 'background 0.2s'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              zIndex: 999,
              background: 'rgba(5,5,5,0.97)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                download={link.download}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: link.accent ? 'var(--accent-secondary)' : 'var(--text-primary)',
                  textDecoration: 'none',
                  letterSpacing: '1px',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 + 0.1 }}
              className="bg-gradient"
              style={{
                marginTop: '16px',
                padding: '16px 48px',
                borderRadius: '30px',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.2rem',
              }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline style to show hamburger on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
