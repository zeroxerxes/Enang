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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');
        setShowSuccess(false);

        console.log('Form submission started');
        console.log('Form data:', formData);

        try {
            console.log('Sending request to FormSubmit...');

            // Use FormData instead of JSON to avoid CORS preflight issues
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('service', formData.service);
            formDataToSend.append('message', formData.message);
            formDataToSend.append('_subject', 'New Contact Form Submission from Website');
            formDataToSend.append('_template', 'box');
            formDataToSend.append('_captcha', 'false');

            const response = await fetch('https://formsubmit.co/ajax/contact@berniceenang.me', {
                method: 'POST',
                body: formDataToSend
            });

            console.log('Response status:', response.status);
            const data = await response.json();
            console.log('Response data:', data);

            if (response.ok) {
                console.log('Success!');
                setShowSuccess(true);
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                setTimeout(() => {
                    setShowSuccess(false);
                }, 8000);
            } else {
                console.error('Error response:', data);
                setErrorMessage(data.message || 'There was an error sending your message. Please try again or email us directly at contact@berniceenang.me');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setErrorMessage('Network error. Please check your connection or email us directly at contact@berniceenang.me');
        } finally {
            setIsSubmitting(false);
            console.log('Form submission completed');
        }
    };

    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://web.facebook.com/benkeshlajay',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            color: '#1877F2'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/bernice-enang-nso/',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            color: '#0A66C2'
        },
        {
            name: 'Threads',
            url: 'https://www.threads.com/@benkeshlajay/',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm2.74-12.7c-.3-.3-.71-.48-1.18-.54a3.8 3.8 0 0 0-1.89.26 3.5 3.5 0 0 0-1.84 2.15c-.24.78-.2 1.63.13 2.38.3.69.83 1.23 1.5 1.54.43.2.89.3 1.35.31.57 0 1.13-.15 1.6-.45.09-.06.18-.12.26-.19l1.1 1.05c-.32.3-.7.54-1.13.72a5.4 5.4 0 0 1-4.7-.29c-1.1-.64-1.92-1.68-2.3-2.91-.45-1.45-.33-3 .34-4.32a5.4 5.4 0 0 1 3.5-3.04 6 6 0 0 1 3.96.15c.9.36 1.63.99 2.06 1.83.43.83.52 1.81.25 2.76-.36 1.25-1.32 2.22-2.52 2.58-.57.17-1.16.23-1.74.17-.3-.03-.6-.1-.88-.2-.1-.03-.18-.1-.23-.2s-.05-.22-.01-.32c.07-.17.2-.31.37-.37.15-.05.32-.05.47-.01.2.06.41.09.61.1.42.02.83-.03 1.22-.15.82-.25 1.48-.9 1.73-1.74.17-.63.11-1.3-.17-1.87-.28-.56-.76-.99-1.35-1.22z" />
                </svg>
            ),
            color: '#000000'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/benkeshlajay',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.56-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.413-.56-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.217-.56.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.058.935 20.39.522 19.6.217c-.765-.295-1.636-.499-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            ),
            color: '#E4405F'
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

                            {errorMessage && (
                                <div style={{
                                    marginBottom: '2rem',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    border: '2px solid rgba(239, 68, 68, 0.3)',
                                    color: '#dc2626',
                                    textAlign: 'center'
                                }}>
                                    <p style={{ margin: 0, fontSize: '1rem' }}>{errorMessage}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>

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
                                    disabled={isSubmitting}
                                    style={{
                                        width: '100%',
                                        fontSize: '1.1rem',
                                        padding: '1rem',
                                        opacity: isSubmitting ? 0.7 : 1,
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
