import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'WhatsApp',
            url: 'https://wa.me/237650078429',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            )
        },
        {
            name: 'Facebook',
            url: 'https://web.facebook.com/benkeshlajay',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/bernice-enang-nso/',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: 'Threads',
            url: 'https://www.threads.net/@benkeshlajay',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm2.74-12.7c-.3-.3-.71-.48-1.18-.54a3.8 3.8 0 0 0-1.89.26 3.5 3.5 0 0 0-1.84 2.15c-.24.78-.2 1.63.13 2.38.3.69.83 1.23 1.5 1.54.43.2.89.3 1.35.31.57 0 1.13-.15 1.6-.45.09-.06.18-.12.26-.19l1.1 1.05c-.32.3-.7.54-1.13.72a5.4 5.4 0 0 1-4.7-.29c-1.1-.64-1.92-1.68-2.3-2.91-.45-1.45-.33-3 .34-4.32a5.4 5.4 0 0 1 3.5-3.04 6 6 0 0 1 3.96.15c.9.36 1.63.99 2.06 1.83.43.83.52 1.81.25 2.76-.36 1.25-1.32 2.22-2.52 2.58-.57.17-1.16.23-1.74.17-.3-.03-.6-.1-.88-.2-.1-.03-.18-.1-.23-.2s-.05-.22-.01-.32c.07-.17.2-.31.37-.37.15-.05.32-.05.47-.01.2.06.41.09.61.1.42.02.83-.03 1.22-.15.82-.25 1.48-.9 1.73-1.74.17-.63.11-1.3-.17-1.87-.28-.56-.76-.99-1.35-1.22z" />
                </svg>
            )
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/benkeshlajay',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.56-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.413-.56-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.217-.56.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.058.935 20.39.522 19.6.217c-.765-.295-1.636-.499-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            )
        
    ];

    return (
        <footer style={{
            background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
            color: 'white',
            padding: '4rem 0 2rem',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            marginBottom: '1rem',
                            fontFamily: 'var(--font-heading)',
                            color: 'rgb(255 34 53)'
                        }}>
                            Bernice Enang
                        </h3>
                        <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                            Identity Development Counsellor, Soft Skills Trainer, and Life Coach dedicated to whole person empowerment and building resilient communities.
                        </p>
                    </div>

                    <div>
                        <h4 style={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'rgb(255 34 53)'
                        }}>
                            Quick Links
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Home', 'About', 'BENK Assist', 'FIHOF', 'Portfolio', 'Contact'].map((item) => (
                                <li key={item} style={{ marginBottom: '0.5rem' }}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        style={{
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            textDecoration: 'none',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onMouseOver={(e) => e.target.style.color = 'rgb(255 34 53)'}
                                        onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'rgb(255 34 53)'
                        }}>
                            Contact
                        </h4>
                        <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.5rem' }}>
                            📧 contact@bernineenang.me
                        </p>
                        <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.5rem' }}>
                            📱 +237 650 07 84 29
                        </p>
                        <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                            📍 Cameroon
                        </p>
                    </div>

                    <div>
                        <h4 style={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'rgb(255 34 53)'
                        }}>
                            Follow Me
                        </h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '8px',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = 'rgb(255 34 53)';
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    color: 'rgba(255, 255, 255, 0.6)'
                }}>
                    <p>&copy; {currentYear} Bernice Enang Nso Keshu. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
