import React from 'react';

const Fihof = () => {
    const initiatives = [
        {
            icon: '👨‍👦',
            title: 'Boys to Gentlemen',
            description: 'Mentorship programs guiding young boys into responsible, emotionally healthy manhood.',
            impact: '200+ Boys Mentored'
        },
        {
            icon: '💬',
            title: 'Process Talk',
            description: 'A place where young boys and girls build character, learn values and principles and build authentic connections.',
            impact: '50+ Sessions Held'
        },
        {
            icon: '🎓',
            title: 'Manhood Coaching',
            description: 'Monthly webinars and workshops addressing modern masculinity and personal development.',
            impact: '500+ Participants'
        },
        {
            icon: '🤝',
            title: 'Intergenerational Dialogue',
            description: 'Bridging the gap between older men and young boys through wisdom sharing and mentorship.',
            impact: '100+ Connections Made'
        }
    ];

    const values = [
        { title: 'Dignity', description: 'Every person deserves to be treated with respect and honor' },
        { title: 'Healing', description: 'Creating safe spaces for emotional and relational restoration' },
        { title: 'Growth', description: 'Fostering continuous personal and community development' },
        { title: 'Connection', description: 'Building strong, authentic relationships across generations' }
    ];

    const stats = [
        { number: '100+', label: 'Men Empowered' },
        { number: '50+', label: 'Families Restored' },
        { number: '20+', label: 'Workshops Delivered' },
        { number: '3', label: 'Years of Impact' }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section style={{
                background: '#261616',
                padding: '8rem 0 6rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: '15%', right: '5%', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(230, 126, 34, 0.15)', filter: 'blur(80px)' }}></div>
                <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(25, 55, 109, 0.2)', filter: 'blur(70px)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <div className="animate-scale-in" style={{ marginBottom: '2rem' }}>
                            <img
                                src="/assets/logo fifoh.png"
                                alt="FIHOF"
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
                            marginBottom: '1rem',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            First Housebond Foundation
                        </h1>

                        <p className="animate-slide-up delay-100" style={{
                            fontSize: '1.4rem',
                            color: 'rgb(255 34 53)',
                            marginBottom: '1.5rem',
                            fontWeight: '600',
                            letterSpacing: '0.5px'
                        }}>
                            Building Families Empowering Communities
                        </p>

                        <p className="animate-slide-up delay-200" style={{
                            fontSize: '1.15rem',
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: '1.8',
                            maxWidth: '700px',
                            margin: '0 auto 2.5rem'
                        }}>
                            A Foundation championing male empowerment as a strong pillar for families </p>

                        <div className="animate-slide-up delay-300">
                            <a href="/contact" className="btn btn-primary" style={{
                                background: 'rgb(255 34 53)',
                                color: 'white',
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                boxShadow: '0 10px 30px rgba(230, 126, 34, 0.4)'
                            }}>
                                Join Our Mission
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, #FAF9F6 0%, #FFFFFF 100%)'
            }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem'
                    }}>
                        <div className="glass-card animate-slide-up" style={{
                            padding: '3rem',
                            borderTop: '4px solid #19376D'
                        }}>
                            <h2 style={{
                                fontSize: '2rem',
                                marginBottom: '1.5rem',
                                color: '#19376D',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                Our Mission
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#475569',
                                lineHeight: '1.8',
                                marginBottom: '1.5rem'
                            }}>
                                To restore family dignity by elevating authentic manhood, responsible fatherhood, committed husbandhood, and supportive brotherhood in the home.
                            </p>
                            <div style={{
                                background: 'rgba(25, 55, 109, 0.05)',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                marginTop: '1.5rem'
                            }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#19376D', fontWeight: '600' }}>Our Pillars:</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ padding: '0.5rem 0', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#E67E22', fontSize: '1.2rem' }}>✓</span>
                                        Modern Model Manhood
                                    </li>
                                    <li style={{ padding: '0.5rem 0', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#E67E22', fontSize: '1.2rem' }}>✓</span>
                                        Global Citizenship
                                    </li>
                                    <li style={{ padding: '0.5rem 0', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#E67E22', fontSize: '1.2rem' }}>✓</span>
                                        Empowerment
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="glass-card animate-slide-up delay-100" style={{
                            padding: '3rem',
                            borderTop: '4px solid rgb(255 34 53)'
                        }}>
                            <h2 style={{
                                fontSize: '2rem',
                                marginBottom: '1.5rem',
                                color: 'rgb(255 34 53)',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                Our Vision
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#475569',
                                lineHeight: '1.8'
                            }}>
                                A world where every man and boy has access to the support, guidance, and resources needed to become emotionally healthy, responsible, and contributing members of society — championing strong families built on dignity, love, and authentic connection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Initiatives */}
            <section className="section" style={{
                background: 'linear-gradient(135deg, #F0F4F8 0%, #E6F0FA 100%)'
            }}>
                <div className="container">
                    <h2 className="animate-slide-up" style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        color: '#19376D'
                    }}>
                        Our Initiatives
                    </h2>
                    <p className="animate-slide-up delay-100" style={{
                        textAlign: 'center',
                        fontSize: '1.1rem',
                        color: '#64748B',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Programs designed to create lasting change in the lives of men, boys, and families
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {initiatives.map((initiative, index) => (
                            <div
                                key={index}
                                className="glass-card animate-slide-up"
                                style={{
                                    padding: '2.5rem',
                                    animationDelay: `${index * 0.15}s`,
                                    textAlign: 'center',
                                    background: 'white'
                                }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #19376D 0%, #2C5282 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.5rem',
                                    margin: '0 auto 1.5rem',
                                    boxShadow: '0 10px 30px rgba(25, 55, 109, 0.3)'
                                }}>
                                    {initiative.icon}
                                </div>

                                <h3 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                    color: '#19376D',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {initiative.title}
                                </h3>

                                <p style={{
                                    color: '#64748B',
                                    lineHeight: '1.8',
                                    marginBottom: '1.5rem'
                                }}>
                                    {initiative.description}
                                </p>

                                <div style={{
                                    padding: '0.75rem 1.5rem',
                                    background: 'linear-gradient(135deg, rgba(230, 126, 34, 0.1) 0%, rgba(230, 126, 34, 0.05) 100%)',
                                    borderRadius: '25px',
                                    color: '#E67E22',
                                    fontWeight: '600',
                                    fontSize: '0.9rem'
                                }}>
                                    {initiative.impact}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{
                background: '#261616',
                padding: '5rem 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: '20%', right: '10%', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(230, 126, 34, 0.1)', filter: 'blur(60px)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h2 className="animate-slide-up" style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        color: 'white'
                    }}>
                        Our Impact
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '3rem',
                        textAlign: 'center'
                    }}>
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="animate-scale-in"
                                style={{
                                    animationDelay: `${index * 0.15}s`
                                }}
                            >
                                <div style={{
                                    fontSize: '3.5rem',
                                    fontWeight: '700',
                                    color: 'rgb(255 34 53)',
                                    marginBottom: '0.5rem',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {stat.number}
                                </div>
                                <div style={{
                                    fontSize: '1.1rem',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontWeight: '500'
                                }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF9F6 100%)'
            }}>
                <div className="container">
                    <h2 className="animate-slide-up" style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        color: '#19376D'
                    }}>
                        Our Core Values
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}>
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="animate-slide-up"
                                style={{
                                    padding: '2rem',
                                    textAlign: 'center',
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    marginBottom: '1rem',
                                    color: '#E67E22',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {value.title}
                                </h3>
                                <p style={{
                                    color: '#64748B',
                                    lineHeight: '1.7'
                                }}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                background: 'linear-gradient(135deg, #E67E22 0%, #D35400 100%)',
                padding: '5rem 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 className="animate-slide-up" style={{
                        fontSize: '2.5rem',
                        color: 'white',
                        marginBottom: '1.5rem'
                    }}>
                        Be Part of the Change
                    </h2>
                    <p className="animate-slide-up delay-100" style={{
                        fontSize: '1.2rem',
                        color: 'rgba(255, 255, 255, 0.95)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem'
                    }}>
                        Join us in our mission to heal families and empower the next generation of men.
                    </p>
                    <a href="/contact" className="btn animate-slide-up delay-200" style={{
                        background: 'white',
                        color: '#E67E22',
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}>
                        Get Involved
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Fihof;
