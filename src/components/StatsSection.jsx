import React, { useState, useEffect, useRef } from 'react';

const StatCounter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isVisible, end, duration]);

    return (
        <span ref={counterRef}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
};

const StatsSection = () => {
    const stats = [
        {
            number: 3000,
            suffix: '+',
            label: 'Lives Transformed',
            description: 'Individuals empowered through coaching',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            number: 100,
            suffix: '+',
            label: 'Workshops Delivered',
            description: 'Impactful training sessions conducted',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            number: 50,
            suffix: '+',
            label: 'Organizations Served',
            description: 'Companies transformed through our programs',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
            number: 10,
            suffix: '+',
            label: 'Years of Experience',
            description: 'Dedicated to healing and growth',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        }
    ];

    return (
        <section style={{
            background: 'linear-gradient(135deg, #FAF9F6 0%, #FFFFFF 100%)',
            position: 'relative',
            overflow: 'hidden',
            padding: '6rem 0'
        }}>
            {/* Decorative Background Elements */}
            <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(198, 142, 118, 0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
            <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>

            {/* Floating Shapes */}
            <div style={{ position: 'absolute', top: '20%', left: '15%', width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(198, 142, 118, 0.05)', transform: 'rotate(15deg)', animation: 'float 6s ease-in-out infinite' }}></div>
            <div style={{ position: 'absolute', bottom: '25%', right: '20%', width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.06)', animation: 'float 8s ease-in-out infinite reverse' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="animate-slide-up" style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        marginBottom: '1rem',
                        color: 'var(--color-secondary)',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        Our Impact in <span className="text-gradient">Numbers</span>
                    </h2>
                    <p className="animate-slide-up delay-100" style={{
                        fontSize: '1.1rem',
                        color: '#64748B',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Transforming lives and building stronger communities through dedication and compassion
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="animate-slide-up"
                            style={{
                                animationDelay: `${index * 0.15}s`,
                                position: 'relative'
                            }}
                        >
                            <div
                                className="glass-card"
                                style={{
                                    padding: '2.5rem 2rem',
                                    textAlign: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(198, 142, 118, 0.1)'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                }}
                            >
                                {/* Gradient Accent Bar */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '4px',
                                    background: stat.gradient
                                }}></div>

                                {/* Number */}
                                <div style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                    fontWeight: '700',
                                    background: stat.gradient,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontFamily: 'var(--font-heading)',
                                    marginBottom: '0.5rem',
                                    lineHeight: '1.2'
                                }}>
                                    <StatCounter end={stat.number} suffix={stat.suffix} />
                                </div>

                                {/* Label */}
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: 'var(--color-secondary)',
                                    marginBottom: '0.75rem',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {stat.label}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: '#64748B',
                                    lineHeight: '1.5',
                                    fontFamily: 'var(--font-body)'
                                }}>
                                    {stat.description}
                                </p>

                                {/* Decorative Circle */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-30px',
                                    right: '-30px',
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    background: stat.gradient,
                                    opacity: '0.05',
                                    pointerEvents: 'none'
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="animate-slide-up delay-500" style={{
                    textAlign: 'center',
                    marginTop: '4rem',
                    padding: '2rem',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(198, 142, 118, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)',
                    border: '1px solid rgba(198, 142, 118, 0.1)'
                }}>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-secondary)',
                        marginBottom: '1.5rem',
                        fontWeight: '500'
                    }}>
                        Ready to be part of this transformation?
                    </p>
                    <a
                        href="/contact"
                        className="btn btn-primary"
                        style={{
                            display: 'inline-block',
                            textDecoration: 'none'
                        }}
                    >
                        Start Your Journey
                    </a>
                </div>
            </div>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
        </section>
    );
};

export default StatsSection;
