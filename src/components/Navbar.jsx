import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/benk-assist', label: 'BENK Assist' },
        { path: '/fihof', label: 'FIHOF' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: scrolled || mobileMenuOpen
                ? 'rgba(255, 255, 255, 0.98)'
                : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8))',
            backdropFilter: 'blur(20px)',
            boxShadow: scrolled || mobileMenuOpen
                ? '0 4px 20px rgba(0,0,0,0.08)'
                : 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            borderBottom: scrolled || mobileMenuOpen
                ? '1px solid rgba(198, 142, 118, 0.1)'
                : '1px solid transparent'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: scrolled ? '0.75rem 1rem' : '1rem 1rem',
                transition: 'padding 0.3s ease'
            }}>
                {/* Logo */}
                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    textDecoration: 'none',
                    zIndex: 1001
                }}>
                    <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #C68E76 0%, #D4AF37 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: '700',
                        fontSize: '1.1rem',
                        fontFamily: 'var(--font-heading)',
                        boxShadow: '0 4px 12px rgba(198, 142, 118, 0.3)',
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(-5deg) scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(0) scale(1)'}
                    >
                        BK
                    </div>
                    <div>
                        <div style={{
                            fontSize: '1.05rem',
                            fontWeight: '700',
                            fontFamily: 'var(--font-heading)',
                            background: 'linear-gradient(135deg, #2C3E50 0%, #C68E76 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            lineHeight: '1.2'
                        }}>
                            Bernice Keshu
                        </div>
                        <div style={{
                            fontSize: '0.55rem',
                            color: '#64748B',
                            fontWeight: '500',
                            letterSpacing: '0.5px',
                            fontFamily: 'var(--font-body)'
                        }}>
                            IDENTITY • HEALING • GROWTH
                        </div>
                    </div>
                </Link>

                {/* Hamburger Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'none',
                        flexDirection: 'column',
                        gap: '5px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '10px',
                        zIndex: 1001,
                        position: 'relative'
                    }}
                    className="mobile-menu-btn"
                    aria-label="Toggle menu"
                >
                    <span style={{
                        width: '28px',
                        height: '2.5px',
                        background: 'var(--color-secondary)',
                        borderRadius: '2px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: mobileMenuOpen ? 'rotate(45deg) translateY(7.5px)' : 'none'
                    }}></span>
                    <span style={{
                        width: '28px',
                        height: '2.5px',
                        background: 'var(--color-secondary)',
                        borderRadius: '2px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        opacity: mobileMenuOpen ? 0 : 1,
                        transform: mobileMenuOpen ? 'translateX(10px)' : 'none'
                    }}></span>
                    <span style={{
                        width: '28px',
                        height: '2.5px',
                        background: 'var(--color-secondary)',
                        borderRadius: '2px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-7.5px)' : 'none'
                    }}></span>
                </button>

                {/* Desktop Menu */}
                <ul style={{
                    display: 'flex',
                    gap: '0.25rem',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    alignItems: 'center'
                }}
                    className="desktop-menu">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    style={{
                                        textDecoration: 'none',
                                        color: isActive ? '#C68E76' : 'var(--color-text-main)',
                                        fontWeight: isActive ? '600' : '500',
                                        transition: 'all 0.3s ease',
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.875rem',
                                        padding: '0.5rem 0.9rem',
                                        borderRadius: '8px',
                                        background: isActive
                                            ? 'linear-gradient(135deg, rgba(198, 142, 118, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%)'
                                            : 'transparent',
                                        position: 'relative',
                                        display: 'inline-block'
                                    }}
                                    onMouseOver={(e) => {
                                        if (!isActive) {
                                            e.target.style.color = '#C68E76';
                                            e.target.style.background = 'rgba(198, 142, 118, 0.05)';
                                        }
                                    }}
                                    onMouseOut={(e) => {
                                        if (!isActive) {
                                            e.target.style.color = 'var(--color-text-main)';
                                            e.target.style.background = 'transparent';
                                        }
                                    }}
                                >
                                    {link.label}
                                    {isActive && (
                                        <span style={{
                                            position: 'absolute',
                                            bottom: '4px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '18px',
                                            height: '2.5px',
                                            background: 'linear-gradient(90deg, #C68E76 0%, #D4AF37 100%)',
                                            borderRadius: '2px'
                                        }}></span>
                                    )}
                                </Link>
                            </li>
                        );
                    })}

                    {/* CTA Button */}
                    <li>
                        <Link
                            to="/contact"
                            className="btn btn-primary"
                            style={{
                                padding: '0.5rem 1.25rem',
                                fontSize: '0.85rem',
                                marginLeft: '0.5rem',
                                boxShadow: '0 4px 12px rgba(198, 142, 118, 0.3)'
                            }}
                        >
                            Get Started
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '100%',
                    maxWidth: '400px',
                    height: '100vh',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 249, 246, 0.98) 100%)',
                    backdropFilter: 'blur(20px)',
                    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '2rem',
                    zIndex: 1000,
                    boxShadow: mobileMenuOpen ? '-10px 0 30px rgba(0,0,0,0.1)' : 'none'
                }}
                    className="mobile-menu">
                    {navLinks.map((link, index) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                style={{
                                    textDecoration: 'none',
                                    color: isActive ? '#C68E76' : 'var(--color-text-main)',
                                    fontWeight: isActive ? '700' : '500',
                                    fontSize: '1.5rem',
                                    fontFamily: 'var(--font-body)',
                                    transition: 'all 0.3s ease',
                                    padding: '0.75rem 2rem',
                                    borderRadius: '12px',
                                    background: isActive
                                        ? 'linear-gradient(135deg, rgba(198, 142, 118, 0.15) 0%, rgba(212, 175, 55, 0.15) 100%)'
                                        : 'transparent',
                                    width: '100%',
                                    textAlign: 'center',
                                    opacity: mobileMenuOpen ? 1 : 0,
                                    transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                                    transitionDelay: mobileMenuOpen ? `${index * 0.05}s` : '0s'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.background = 'linear-gradient(135deg, rgba(198, 142, 118, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%)';
                                }}
                                onMouseOut={(e) => {
                                    if (!isActive) {
                                        e.target.style.background = 'transparent';
                                    }
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    <Link
                        to="/contact"
                        className="btn btn-primary"
                        style={{
                            marginTop: '1rem',
                            fontSize: '1.2rem',
                            padding: '1rem 2.5rem',
                            width: '100%',
                            textAlign: 'center',
                            opacity: mobileMenuOpen ? 1 : 0,
                            transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                            transitionDelay: mobileMenuOpen ? `${navLinks.length * 0.05}s` : '0s'
                        }}
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.3)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 999,
                            animation: 'fadeIn 0.3s ease'
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
