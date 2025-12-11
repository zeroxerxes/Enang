import React from 'react';
import Timeline from '../components/Timeline';

const About = () => {
    const journeyEvents = [
        {
            year: '2009',
            title: 'The Calling',
            description: 'Discovered my passion for identity development and counselling through personal experiences and observations of family dynamics.',
            icon: '✨'
        },
        {
            year: '2009 - 2025',
            title: 'Professional Training',
            description: 'Completed advanced certifications in counselling psychology and life coaching, building a strong foundation for transformative work.',
            icon: '🎓'
        },
        {
            year: '2013',
            title: 'Community Impact Begins',
            description: 'Started conducting workshops and training sessions, reaching hundreds of individuals and families in need of healing.',
            icon: '🌱'
        },
        {
            year: '2012 - Present',
            title: 'BENK Assist ',
            description: 'Established BENK Assist for whole person empowerment. Building character, soft skills and self mastery.',
            icon: '🏆'
        },
        {
            year: 'Present',
            title: 'Expanding Horizons',
            description: 'Founded FIHOF to give back through male empowerment for family resilience. Transforming lives through coaching, training and community outreach ',
            icon: '🚀'
        }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF9F6 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: '15%', right: '5%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', filter: 'blur(50px)', animation: 'float 8s ease-in-out infinite' }}></div>
                <div style={{ position: 'absolute', bottom: '20%', left: '8%', width: '150px', height: '150px', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', background: 'rgba(198, 142, 118, 0.08)', transform: 'rotate(25deg)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h1 className="animate-slide-up" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-secondary)', textAlign: 'center' }}>
                            Bernice Enang-Nso Keshu
                        </h1>
                        <p className="animate-slide-up delay-100" style={{ fontSize: '1.3rem', textAlign: 'center', color: 'var(--color-primary)', marginBottom: '3rem', fontStyle: 'italic' }}>
                            "Transformation starts from within — with grace and resilience."
                        </p>

                        {/* Profile Image and Professional Profile - Centered */}
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
                            <div className="animate-scale-in delay-100" style={{ maxWidth: '450px', width: '100%' }}>
                                <img src="/assets/logo.png" alt="Bernice Keshu" style={{ borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%' }} />
                                <div className="glass-card" style={{ marginTop: '1.5rem', padding: '1.5rem', textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Professional Profile</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: '1.6' }}>
                                        Seasoned helping professional and human development expert
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* My Story - Full Width */}
                        <div className="animate-slide-up delay-200" style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)', textAlign: 'center' }}>My Story</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#475569', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto' }}>
                                From a place of deep curiosity about who I am, what makes me whole, and what breaks my wholeness, i embarked on a journey to find me
                                ,through an inner battle with self-doubt and impostor syndrome.
                                During that transition, I witnessed firsthand how unhealed experiences show up in how we speak, work, parent, and relate to others.
                                I felt called to respond — and two expression of me were born; (BENK Assist and FIHOF) to guide others through transitions, healing, and personal mastery.
                            </p>
                        </div>

                        {/* Mission & Purpose - Two Column Grid */}
                        <div className="animate-slide-up delay-300" style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-primary)', textAlign: 'center' }}>Mission & Purpose</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                <div className="glass-card" style={{ padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Our Mission</h3>
                                    <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8' }}>
                                        Helping individuals and organizations cultivate character, build identity, harness potential, enhance emotional intelligence, and improve performance and excellence.
                                    </p>
                                </div>
                                <div className="glass-card" style={{ padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💡</div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Our Approach</h3>
                                    <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8' }}>
                                        We design counselling, coaching, and training experiences that strengthen self-awareness, communication, and resilience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* P.R.E.A.C.H Values - Two Column Grid */}
                        <div className="animate-slide-up delay-400">
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-primary)', textAlign: 'center' }}>Our Core Values – P.R.E.A.C.H</h2>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                                {[
                                    { letter: 'P', title: 'Presence', description: 'We show up with purpose, connecting authentically to guide transformation.' },
                                    { letter: 'R', title: 'Respect', description: 'We honour each story with dignity, confidentiality, and inclusion.' },
                                    { letter: 'E', title: 'Empathy', description: 'We listen to understand, helping people feel seen, valued, and capable.' },
                                    { letter: 'A', title: 'Accountability', description: 'We uphold integrity and professionalism in every commitment.' },
                                    { letter: 'C', title: 'Courage', description: 'We encourage bold thinking and brave choices for meaningful growth.' },
                                    { letter: 'H', title: 'Hope', description: 'We believe in transformation and the power of second chances.' }
                                ].map((value, index) => (
                                    <div
                                        key={index}
                                        className={`animate-slide-up delay-${400 + (index * 50)}`}
                                        style={{
                                            display: 'flex',
                                            gap: '1rem',
                                            alignItems: 'flex-start',
                                            padding: '1.5rem',
                                            borderRadius: '12px',
                                            background: 'rgba(198, 142, 118, 0.03)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.background = 'rgba(198, 142, 118, 0.08)';
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.background = 'rgba(198, 142, 118, 0.03)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '12px',
                                            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '1.4rem',
                                            flexShrink: 0
                                        }}>
                                            {value.letter}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>
                                                {value.title}
                                            </h3>
                                            <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
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

            {/* Global Alignment Section */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF9F6 100%)'
            }}>
                <div className="container">
                    <h2 className="animate-slide-up" style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        color: 'var(--color-secondary)'
                    }}>
                        Aligned with <span className="text-gradient">Global Goals</span>
                    </h2>
                    <p className="animate-slide-up delay-100" style={{
                        textAlign: 'center',
                        fontSize: '1.1rem',
                        color: '#64748B',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Our work contributes to international and regional development frameworks
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {/* UN SDGs */}
                        <div className="glass-card animate-slide-up">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                🌍 UN Sustainable Development Goals
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    '1 – No Poverty',
                                    '3 – Good Health & Well-being',
                                    '4 – Quality Education',
                                    '5 – Gender Equality',
                                    '8 – Decent Work',
                                    '10 – Reduced Inequalities',
                                    '16 – Peace, Justice & Strong Institutions',
                                    '17 – Partnerships for the Goals'
                                ].map((goal, i) => (
                                    <li key={i} style={{
                                        padding: '0.5rem 0',
                                        color: '#475569',
                                        borderBottom: i < 7 ? '1px solid rgba(198, 142, 118, 0.1)' : 'none'
                                    }}>
                                        {goal}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* AU Agenda 2063 */}
                        <div className="glass-card animate-slide-up delay-100">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                🌍 AU Agenda 2063
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'Aspiration 1 – Prosperous Africa through inclusive growth',
                                    'Aspiration 3 – Good governance, peace, and security',
                                    "Aspiration 6 – Development of Africa's human capital"
                                ].map((aspiration, i) => (
                                    <li key={i} style={{
                                        padding: '0.75rem 0',
                                        color: '#475569',
                                        borderBottom: i < 2 ? '1px solid rgba(198, 142, 118, 0.1)' : 'none',
                                        lineHeight: '1.6'
                                    }}>
                                        {aspiration}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cameroon NDS30 */}
                        <div className="glass-card animate-slide-up delay-200">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                🇨🇲 Cameroon NDS30
                            </h3>
                            <p style={{ color: '#475569', lineHeight: '1.8' }}>
                                Focus on <strong>Human Development</strong>, <strong>Social Inclusion</strong>, <strong>Women &amp; Youth Empowerment</strong>, and <strong>National Unity</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
