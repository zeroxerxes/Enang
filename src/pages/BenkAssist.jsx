import React from 'react';

const BenkAssist = () => {
    const services = [
        {
            icon: '🎯',
            title: 'Personal Coaching',
            description: 'One-on-one sessions focused on identity development, emotional intelligence, and personal growth.',
            features: ['Goal Setting', 'Self-Discovery', 'Confidence Building', 'Life Balance']
        },
        {
            icon: '💼',
            title: 'Soft Skills Training',
            description: 'Comprehensive training programs for professionals and teams to enhance workplace effectiveness.',
            features: ['Communication', 'Leadership', 'Team Building', 'Conflict Resolution']
        },
        {
            icon: '🏢',
            title: 'Institutional Support',
            description: 'Customized programs for organizations seeking to develop their human capital and culture.',
            features: ['Corporate Training', 'Culture Development', 'Employee Engagement', 'Performance Coaching']
        }
    ];

    const testimonials = [
        {
            quote: "Bernice's coaching transformed my approach to leadership. Her insights on identity and emotional intelligence have been invaluable.",
            author: "Sarah M.",
            role: "Executive Director"
        },
        {
            quote: "The soft skills training our team received was exceptional. We've seen measurable improvements in communication and collaboration.",
            author: "David K.",
            role: "HR Manager"
        },
        {
            quote: "Working with BENK Assist has been a game-changer for our organization. The results speak for themselves.",
            author: "Grace L.",
            role: "CEO"
        }
    ];

    const process = [
        { step: '01', title: 'Discovery', description: 'We begin by understanding your unique needs, goals, and challenges through in-depth consultation.' },
        { step: '02', title: 'Design', description: 'Custom program development tailored to your specific objectives and organizational culture.' },
        { step: '03', title: 'Delivery', description: 'Engaging sessions combining theory, practice, and real-world application for lasting impact.' },
        { step: '04', title: 'Development', description: 'Ongoing support and follow-up to ensure sustained growth and measurable results.' }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #8B4545 0%, #A0522D 100%)',
                padding: '8rem 0 6rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: '15%', right: '5%', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(160, 82, 45, 0.2)', filter: 'blur(80px)' }}></div>
                <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(139, 69, 69, 0.15)', filter: 'blur(70px)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <div className="animate-scale-in" style={{ marginBottom: '2rem' }}>
                            <img
                                src="/assets/logo benk assist.jpg"
                                alt="BENK Assist"
                                style={{
                                    height: '100px',
                                    margin: '0 auto',
                                    borderRadius: '20px',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                                    background: 'white',
                                    padding: '1rem'
                                }}
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                        </div>

                        <h1 className="animate-slide-up" style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            color: 'white',
                            marginBottom: '1.5rem',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            BENK Assist
                        </h1>

                        <p className="animate-slide-up delay-100" style={{
                            fontSize: '1.3rem',
                            color: 'rgba(255, 255, 255, 0.95)',
                            marginBottom: '2rem',
                            lineHeight: '1.8',
                            fontWeight: '500'
                        }}>
                            Empowering Individuals & Organizations Through Professional Development
                        </p>

                        <div className="animate-slide-up delay-200">
                            <a href="/contact" className="btn btn-primary" style={{
                                background: 'white',
                                color: '#8B4545',
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                            }}>
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, #FAF9F6 0%, #FFFFFF 100%)'
            }}>
                <div className="container">
                    <h2 className="animate-slide-up" style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        color: '#8B4545'
                    }}>
                        Our Services
                    </h2>
                    <p className="animate-slide-up delay-100" style={{
                        textAlign: 'center',
                        fontSize: '1.1rem',
                        color: '#64748B',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Comprehensive solutions designed to unlock potential and drive meaningful transformation
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="glass-card animate-slide-up"
                                style={{
                                    padding: '2.5rem',
                                    animationDelay: `${index * 0.15}s`,
                                    borderTop: '4px solid #A0522D'
                                }}
                            >
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '16px',
                                    background: 'linear-gradient(135deg, #8B4545 0%, #A0522D 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem',
                                    marginBottom: '1.5rem',
                                    boxShadow: '0 8px 20px rgba(139, 69, 69, 0.3)'
                                }}>
                                    {service.icon}
                                </div>

                                <h3 style={{
                                    fontSize: '1.75rem',
                                    marginBottom: '1rem',
                                    color: '#8B4545',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {service.title}
                                </h3>

                                <p style={{
                                    color: '#64748B',
                                    lineHeight: '1.8',
                                    marginBottom: '1.5rem',
                                    fontSize: '1rem'
                                }}>
                                    {service.description}
                                </p>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '0.75rem'
                                }}>
                                    {service.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                padding: '0.5rem 0.75rem',
                                                background: 'rgba(139, 69, 69, 0.08)',
                                                borderRadius: '8px',
                                                fontSize: '0.85rem',
                                                color: '#8B4545',
                                                fontWeight: '500',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section" style={{
                background: 'linear-gradient(135deg, #F5E6DC 0%, #FAF9F6 100%)',
                position: 'relative'
            }}>
                <div className="container">
                    <h2 className="animate-slide-up" style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        color: '#8B4545'
                    }}>
                        Our Process
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}>
                        {process.map((item, index) => (
                            <div
                                key={index}
                                className="animate-slide-up"
                                style={{
                                    textAlign: 'center',
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #8B4545 0%, #A0522D 100%)',
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem',
                                    boxShadow: '0 10px 30px rgba(139, 69, 69, 0.3)',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {item.step}
                                </div>

                                <h3 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '0.75rem',
                                    color: '#8B4545',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {item.title}
                                </h3>

                                <p style={{
                                    color: '#64748B',
                                    lineHeight: '1.7',
                                    fontSize: '0.95rem'
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF9F6 100%)'
            }}>
                <div className="container">
                    <h2 className="animate-slide-up" style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        color: '#8B4545'
                    }}>
                        Client Testimonials
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="glass-card animate-slide-up"
                                style={{
                                    padding: '2.5rem',
                                    animationDelay: `${index * 0.15}s`,
                                    position: 'relative'
                                }}
                            >
                                <div style={{
                                    fontSize: '4rem',
                                    color: '#A0522D',
                                    opacity: 0.2,
                                    position: 'absolute',
                                    top: '1rem',
                                    left: '1.5rem',
                                    fontFamily: 'Georgia, serif',
                                    lineHeight: 1
                                }}>
                                    "
                                </div>

                                <p style={{
                                    fontSize: '1.05rem',
                                    color: '#475569',
                                    lineHeight: '1.8',
                                    marginBottom: '1.5rem',
                                    fontStyle: 'italic',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    {testimonial.quote}
                                </p>

                                <div style={{
                                    borderTop: '2px solid rgba(139, 69, 69, 0.2)',
                                    paddingTop: '1rem'
                                }}>
                                    <p style={{
                                        fontWeight: '600',
                                        color: '#8B4545',
                                        marginBottom: '0.25rem'
                                    }}>
                                        {testimonial.author}
                                    </p>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: '#94A3B8'
                                    }}>
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                background: 'linear-gradient(135deg, #8B4545 0%, #A0522D 100%)',
                padding: '5rem 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 className="animate-slide-up" style={{
                        fontSize: '2.5rem',
                        color: 'white',
                        marginBottom: '1.5rem'
                    }}>
                        Ready to Transform Your Potential?
                    </h2>
                    <p className="animate-slide-up delay-100" style={{
                        fontSize: '1.2rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem'
                    }}>
                        Let's work together to unlock your full potential and achieve your goals.
                    </p>
                    <a href="/contact" className="btn animate-slide-up delay-200" style={{
                        background: 'white',
                        color: '#8B4545',
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}>
                        Schedule a Consultation
                    </a>
                </div>
            </section>
        </div>
    );
};

export default BenkAssist;
