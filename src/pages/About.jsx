import React from 'react';
import Timeline from '../components/Timeline';

const About = () => {
    const journeyEvents = [
        {
            year: '2015',
            title: 'The Calling',
            description: 'Discovered my passion for identity development and counselling through personal experiences and observations of family dynamics.',
            icon: '✨'
        },
        {
            year: '2018',
            title: 'Professional Training',
            description: 'Completed advanced certifications in counselling psychology and life coaching, building a strong foundation for transformative work.',
            icon: '🎓'
        },
        {
            year: '2020',
            title: 'Community Impact Begins',
            description: 'Started conducting workshops and training sessions, reaching hundreds of individuals and families in need of healing.',
            icon: '🌱'
        },
        {
            year: '2023',
            title: 'BENK Assist & FIHOF',
            description: 'Established BENK Assist for professional development and First Housebond Foundation to empower men and rebuild families.',
            icon: '🏆'
        },
        {
            year: 'Present',
            title: 'Expanding Horizons',
            description: 'Continuing to transform lives through coaching, training, and community outreach, with a vision for even greater impact.',
            icon: '🚀'
        }
    ];

    return (
        <div className="animate-fade-in">
            <section className="section" style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF9F6 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Elements */}
                <div style={{ position: 'absolute', top: '15%', right: '5%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', filter: 'blur(50px)', animation: 'float 8s ease-in-out infinite' }}></div>
                <div style={{ position: 'absolute', bottom: '20%', left: '8%', width: '150px', height: '150px', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', background: 'rgba(198, 142, 118, 0.08)', transform: 'rotate(25deg)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h1 className="animate-slide-up" style={{ fontSize: '3rem', marginBottom: '3rem', color: 'var(--color-secondary)', textAlign: 'center' }}>
                            My Story & <span className="text-gradient">Philosophy</span>
                        </h1>

                        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                            <div className="animate-scale-in delay-100" style={{ flex: '0 0 300px', position: 'sticky', top: '100px' }}>
                                <img src="/assets/profile-about.png" alt="Bernice Keshu" style={{ borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%' }} />
                            </div>

                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <p className="animate-slide-up delay-200" style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                                    My journey into identity development and counselling wasn't just a career choice; it was a calling born from my own experiences and observations of the world around me. I realized early on that true healing begins when we understand who we are—our identity.
                                </p>

                                <p className="animate-slide-up delay-300" style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                                    I believe that dignity is the cornerstone of human interaction. When we treat ourselves and others with dignity, we create space for growth, understanding, and genuine connection. My approach weaves together empathy, emotional intelligence, and family-systems thinking to help individuals navigate their own complexities.
                                </p>

                                <h2 className="animate-slide-up delay-400" style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>A Dual Mission</h2>
                                <p className="animate-slide-up delay-500" style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                                    My work flows through two distinct but connected streams. On one hand, I am passionate about <strong>empowering individuals and professionals</strong> to reach their full potential through coaching and skills training.
                                </p>
                                <p className="animate-slide-up delay-500" style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                                    On the other, my heart beats for <strong>healing families</strong>. I have a deep conviction that supporting men and boys is crucial for family stability. By nurturing responsible, emotionally healthy manhood, we create a ripple effect that strengthens families and communities.
                                </p>

                                <blockquote className="animate-slide-up delay-500" style={{
                                    borderLeft: '4px solid var(--color-primary)',
                                    paddingLeft: '1.5rem',
                                    margin: '3rem 0',
                                    fontStyle: 'italic',
                                    fontSize: '1.35rem',
                                    color: 'var(--color-secondary)',
                                    background: 'rgba(198, 142, 118, 0.05)',
                                    padding: '2rem',
                                    borderRadius: '12px'
                                }}>
                                    "Transformation begins within and unfolds through courageous inner work."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey Timeline Section */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, #FAF9F6 0%, #FFFFFF 100%)',
                position: 'relative'
            }}>
                <div className="container">
                    <h2 className="animate-slide-up" style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        color: 'var(--color-secondary)'
                    }}>
                        My <span className="text-gradient">Journey</span>
                    </h2>

                    <Timeline events={journeyEvents} />
                </div>
            </section>
        </div>
    );
};

export default About;
