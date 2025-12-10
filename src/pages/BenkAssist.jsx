import React from 'react';

const BenkAssist = () => {
    const corporatePrograms = [
        {
            title: 'Educators & Schools',
            icon: '🎓',
            programs: [
                'Emotional Inteligence  ',
                'Empathy and youth mentorship',
                'Social intelligence',
                'Adversity intelligence',
                'Self-awareness and wellbeing'
            ]
        },
        {
            title: 'Managers & Teams',
            icon: '👥',
            programs: [
                'Leading in wholeness',
                'Active listening',
                'Adversity intelligence',
                'Feedback culture',
                'Aligning performance with values',
                'Emotional intelligence'
            ]
        },
        {
            title: 'Young Professionals',
            icon: '💼',
            programs: [
                'Workplace readiness',
                'Emotional Inteligence  ',
                'Grooming and etiquette',
                'Resilience under pressure'
            ]
        }
    ];

    const oneOnOneFocus = [
        'Identity alignment',
        'Emotional regulation',
        'Clarity and focus',
        'Decision-making',
        'Time management',
        'Leadership refinement'
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
                            BENK ASSIST
                        </h1>

                        <p className="animate-slide-up delay-100" style={{
                            fontSize: '1.3rem',
                            color: 'rgba(255, 255, 255, 0.95)',
                            marginBottom: '2rem',
                            lineHeight: '1.8',
                            fontWeight: '500'
                        }}>
                            Empowers individuals and structures with inner tools to find their uniqueness and develop the soft skills to thrive
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


            {/* Services Overview */}
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
                        Services
                    </h2>
                    <p className="animate-slide-up delay-100" style={{
                        textAlign: 'center',
                        fontSize: '1.3rem',
                        color: '#64748B',
                        maxWidth: '700px',
                        margin: '0 auto 4rem',
                        fontWeight: '500'
                    }}>
                        Counsellor | Trainer | Coach
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {/* One-on-One Sessions */}
                        <div className="glass-card animate-slide-up" style={{
                            padding: '2.5rem',
                            borderTop: '4px solid #A0522D'
                        }}>
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
                                🎯
                            </div>

                            <h3 style={{
                                fontSize: '1.75rem',
                                marginBottom: '1rem',
                                color: '#8B4545',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                One-on-One Sessions
                            </h3>

                            <p style={{
                                color: '#64748B',
                                lineHeight: '1.8',
                                marginBottom: '1.5rem',
                                fontSize: '1rem'
                            }}>
                                Tailored for either coaching or counselling — recognizing they are not the same.
                            </p>

                            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#8B4545' }}>Focus areas:</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {oneOnOneFocus.map((focus, i) => (
                                    <li key={i} style={{
                                        padding: '0.5rem 0',
                                        color: '#475569',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem'
                                    }}>
                                        <span style={{ color: '#A0522D', fontSize: '1.2rem' }}>✓</span>
                                        {focus}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate & Institutional Programs */}
            <section className="section" style={{
                background: 'linear-gradient(135deg, #F5E6DC 0%, #FAF9F6 100%)',
                position: 'relative'
            }}>
                <div className="container">
                    <h2 className="animate-slide-up" style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        color: '#8B4545'
                    }}>
                        Corporate & Institutional Programs
                    </h2>
                    <p className="animate-slide-up delay-100" style={{
                        textAlign: 'center',
                        fontSize: '1.1rem',
                        color: '#64748B',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Customized training experiences for organizations, schools, and teams
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {corporatePrograms.map((program, index) => (
                            <div
                                key={index}
                                className="glass-card animate-slide-up"
                                style={{
                                    padding: '2.5rem',
                                    animationDelay: `${index * 0.15}s`,
                                    background: 'white'
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
                                    {program.icon}
                                </div>

                                <h3 style={{
                                    fontSize: '1.75rem',
                                    marginBottom: '1.5rem',
                                    color: '#8B4545',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {program.title}
                                </h3>

                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {program.programs.map((item, i) => (
                                        <li key={i} style={{
                                            padding: '0.75rem 0',
                                            color: '#475569',
                                            borderBottom: i < program.programs.length - 1 ? '1px solid rgba(139, 69, 69, 0.1)' : 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem'
                                        }}>
                                            <span style={{ color: '#A0522D', fontSize: '1.2rem' }}>•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF9F6 100%)'
            }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 className="animate-slide-up" style={{
                            fontSize: '2.5rem',
                            marginBottom: '2rem',
                            color: '#8B4545'
                        }}>
                            Philosophy
                        </h2>
                        <p className="animate-slide-up delay-100" style={{
                            fontSize: '1.2rem',
                            color: '#475569',
                            lineHeight: '1.8',
                            marginBottom: '2rem'
                        }}>
                            My work weaves together <strong>psychologically assessed counselling</strong> and <strong>evidence-based coaching</strong>, creating a balanced approach to human transformation and growth.
                        </p>

                        <div className="glass-card animate-slide-up delay-200" style={{
                            padding: '3rem',
                            background: 'rgba(139, 69, 69, 0.05)',
                            borderLeft: '4px solid rgb(5 53 44)'
                        }}>
                            <p style={{
                                fontSize: '1.3rem',
                                fontStyle: 'italic',
                                color: 'rgb(5 53 44)',
                                lineHeight: '1.8'
                            }}>
                                "Empowering individuals and structures with inner tools to find their uniqueness and develop the soft skills to thrive."
                            </p>
                        </div>
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
                        Let's Talk
                    </a>
                </div>
            </section>
        </div>
    );
};

export default BenkAssist;
