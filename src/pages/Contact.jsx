import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        // Check if redirected back with success parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            setShowSuccess(true);
            // Remove the success parameter from URL
            window.history.replaceState({}, '', '/contact');
            // Hide success message after 8 seconds
            setTimeout(() => {
                setShowSuccess(false);
            }, 8000);
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://facebook.com/yourpage',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            color: '#1877F2'
        },
        {
            name: 'TikTok',
            url: 'https://tiktok.com/@yourhandle',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
            ),
            color: '#000000'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/yourprofile',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            color: '#0A66C2'
        }
    ];

    return (
        <div className="animate-fade-in">
            <section className="section" style={{
                background: 'linear-gradient(180deg, #FAF9F6 0%, #FFFFFF 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: '15%', right: '5%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(198, 142, 118, 0.1)', filter: 'blur(50px)' }}></div>
                <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.08)', filter: 'blur(40px)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                        <div>
                            <h1 className="animate-slide-up" style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>
                                Let's <span className="text-gradient">Connect</span>
                            </h1>

                            <div className="animate-scale-in delay-100" style={{ marginBottom: '3rem' }}>
                                <img
                                    src="/assets/Profile5.jpg"
                                    alt="Bernice Keshu"
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '5px solid rgba(198, 142, 118, 0.3)',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </div>

                            <div className="animate-slide-up delay-200" style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Get in Touch</h3>
                                <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.8' }}>
                                    Whether you're seeking personal coaching, organizational training, or want to learn more about our foundation's work, I'd love to hear from you.
                                </p>
                            </div>

                            <div className="animate-slide-up delay-300" style={{ marginBottom: '2rem' }}>
                                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>📧</span>
                                    <div>
                                        <strong style={{ display: 'block', color: 'var(--color-secondary)' }}>Email</strong>
                                        <a href="mailto:contact@berniceenang.me" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                                            contact@berniceenang.me
                                        </a>
                                    </div>
                                </div>
                                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>📱</span>
                                    <div>
                                        <strong style={{ display: 'block', color: 'var(--color-secondary)' }}>Phone</strong>
                                        <a href="tel:+237123456789" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                                            +237 6 50 07 84 29
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div className="animate-slide-up delay-400">
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Follow Me</h3>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '12px',
                                                background: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: social.color,
                                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                                transition: 'all 0.3s ease',
                                                textDecoration: 'none'
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                                e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                                            }}
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="glass-card animate-slide-up delay-200" style={{ padding: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>Send a Message</h2>

                            {/* Success Message */}
                            {showSuccess && (
                                <div style={{
                                    marginBottom: '2rem',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
                                    border: '2px solid rgba(34, 197, 94, 0.3)',
                                    color: '#16a34a',
                                    textAlign: 'center',
                                    animation: 'slideDown 0.5s ease'
                                }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✓</div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#16a34a' }}>Message Sent Successfully!</h3>
                                    <p style={{ margin: 0, fontSize: '1rem' }}>Thank you for contacting us. We will get back to you soon.</p>
                                </div>
                            )}

                            <form
                                action="https://formsubmit.co/contact@berniceenang.me"
                                method="POST"
                            >
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="box" />
                                <input type="hidden" name="_next" value="https://berniceenang.me/contact?success=true" />
                                <input type="hidden" name="_subject" value="New Contact Form Submission from Website" />

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-secondary)' }}>
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '8px',
                                            border: '2px solid #E2E8F0',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-body)',
                                            transition: 'border-color 0.3s ease',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                    />
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-secondary)' }}>
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '8px',
                                            border: '2px solid #E2E8F0',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-body)',
                                            transition: 'border-color 0.3s ease',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                    />
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-secondary)' }}>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '8px',
                                            border: '2px solid #E2E8F0',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-body)',
                                            transition: 'border-color 0.3s ease',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                    />
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-secondary)' }}>
                                        Service Interested In
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '8px',
                                            border: '2px solid #E2E8F0',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-body)',
                                            transition: 'border-color 0.3s ease',
                                            outline: 'none',
                                            backgroundColor: 'white'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                    >
                                        <option value="">Select a service</option>
                                        <option value="counseling">Counseling</option>
                                        <option value="coaching">Coaching</option>
                                        <option value="soft-skills">Soft Skills Training</option>
                                        <option value="institutional">Institutional Support</option>
                                        <option value="fihof">FIHOF Programs</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-secondary)' }}>
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '8px',
                                            border: '2px solid #E2E8F0',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-body)',
                                            transition: 'border-color 0.3s ease',
                                            outline: 'none',
                                            resize: 'vertical'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                    />
                                </div>


                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{
                                        width: '100%',
                                        fontSize: '1.1rem',
                                        padding: '1rem'
                                    }}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
