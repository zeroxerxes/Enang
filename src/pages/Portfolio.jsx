import React, { useState } from 'react';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [lightboxImage, setLightboxImage] = useState(null);

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'workshops', label: 'Workshops' },
        { id: 'coaching', label: 'Coaching' },
        { id: 'community', label: 'Community' }
    ];

    const projects = [
        {
            id: 1,
            title: 'Leadership Development Workshop',
            category: 'workshops',
            description: 'Empowering future leaders through comprehensive soft skills training and identity development.',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
            tags: ['Leadership', 'Training', 'Growth']
        },
        {
            id: 2,
            title: 'Family Healing Initiative',
            category: 'community',
            description: 'Supporting families through counseling and community-based healing programs.',
            image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80',
            tags: ['Family', 'Healing', 'Community']
        },
        {
            id: 3,
            title: 'Executive Coaching Program',
            category: 'coaching',
            description: 'One-on-one coaching sessions for professionals seeking personal and career growth.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
            tags: ['Executive', 'Coaching', 'Professional']
        },
        {
            id: 4,
            title: 'Youth Empowerment Series',
            category: 'workshops',
            description: 'Engaging young minds through interactive workshops on identity and self-discovery.',
            image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80',
            tags: ['Youth', 'Empowerment', 'Identity']
        },
        {
            id: 5,
            title: 'Corporate Training Sessions',
            category: 'workshops',
            description: 'Customized training programs for organizations focused on team building and communication.',
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
            tags: ['Corporate', 'Team Building', 'Communication']
        },
        {
            id: 6,
            title: 'Community Outreach Program',
            category: 'community',
            description: 'Grassroots initiatives bringing healing and support to underserved communities.',
            image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
            tags: ['Outreach', 'Support', 'Impact']
        }
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section style={{
                background: '#261616',
                padding: '8rem 0 6rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: '20%', right: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', filter: 'blur(80px)' }}></div>
                <div style={{ position: 'absolute', bottom: '20%', left: '10%', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(198, 142, 118, 0.08)', filter: 'blur(60px)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 className="animate-slide-up" style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        color: 'white',
                        marginBottom: '1.5rem',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        My <span style={{
                            background: 'rgb(255 34 53)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Portfolio</span>
                    </h1>
                    <p className="animate-slide-up delay-100" style={{
                        fontSize: '1.25rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: '1.8'
                    }}>
                        A showcase of transformative work, impactful workshops, and meaningful connections that have shaped lives and communities.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section style={{
                background: 'linear-gradient(180deg, #FAF9F6 0%, #FFFFFF 100%)',
                padding: '3rem 0',
                borderBottom: '1px solid rgba(198, 142, 118, 0.1)'
            }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap'
                    }}>
                        {categories.map((cat, index) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className="animate-slide-up"
                                style={{
                                    padding: '0.75rem 2rem',
                                    borderRadius: '50px',
                                    border: selectedCategory === cat.id
                                        ? 'none'
                                        : '2px solid rgba(198, 142, 118, 0.3)',
                                    background: selectedCategory === cat.id
                                        ? 'linear-gradient(135deg, #C68E76 0%, rgb(255 34 53) 100%)'
                                        : 'transparent',
                                    color: selectedCategory === cat.id ? 'white' : 'var(--color-secondary)',
                                    fontWeight: '600',
                                    fontSize: '0.95rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontFamily: 'var(--font-body)',
                                    boxShadow: selectedCategory === cat.id
                                        ? '0 4px 12px rgba(198, 142, 118, 0.3)'
                                        : 'none',
                                    animationDelay: `${index * 0.1}s`
                                }}
                                onMouseOver={(e) => {
                                    if (selectedCategory !== cat.id) {
                                        e.currentTarget.style.background = 'rgba(198, 142, 118, 0.1)';
                                        e.currentTarget.style.borderColor = 'rgba(198, 142, 118, 0.5)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (selectedCategory !== cat.id) {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.borderColor = 'rgba(198, 142, 118, 0.3)';
                                    }
                                }}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF9F6 100%)',
                position: 'relative'
            }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="glass-card animate-slide-up"
                                style={{
                                    padding: 0,
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    animationDelay: `${index * 0.1}s`
                                }}
                                onClick={() => setLightboxImage(project)}
                            >
                                <div style={{
                                    position: 'relative',
                                    height: '250px',
                                    overflow: 'hidden',
                                    background: 'linear-gradient(135deg, #C68E76 0%, rgb(255 34 53) 100%)'
                                }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                            opacity: 0.9
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.1)';
                                            e.currentTarget.style.opacity = '1';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.opacity = '0.9';
                                        }}
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />

                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        padding: '1.5rem'
                                    }}
                                        className="project-overlay"
                                    >
                                        <span style={{
                                            color: 'white',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            View Details →
                                        </span>
                                    </div>
                                </div>

                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        marginBottom: '0.75rem',
                                        color: 'var(--color-secondary)',
                                        fontFamily: 'var(--font-heading)'
                                    }}>
                                        {project.title}
                                    </h3>

                                    <p style={{
                                        color: '#64748B',
                                        lineHeight: '1.7',
                                        marginBottom: '1.5rem',
                                        fontSize: '0.95rem'
                                    }}>
                                        {project.description}
                                    </p>

                                    <div style={{
                                        display: 'flex',
                                        gap: '0.5rem',
                                        flexWrap: 'wrap'
                                    }}>
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                style={{
                                                    padding: '0.4rem 1rem',
                                                    borderRadius: '20px',
                                                    background: 'rgba(198, 142, 118, 0.1)',
                                                    color: '#C68E76',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '500',
                                                    border: '1px solid rgba(198, 142, 118, 0.2)'
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div style={{
                            textAlign: 'center',
                            padding: '4rem 0',
                            color: '#64748B'
                        }}>
                            <p style={{ fontSize: '1.2rem' }}>No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Qualifications Section */}
            <section className="section" style={{
                background: '#261616',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: '20%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', filter: 'blur(80px)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h2 className="animate-slide-up" style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        color: 'white'
                    }}>
                        Qualifications & <span style={{
                            background: 'linear-gradient(135deg, rgb(255 34 53) 0%, #C68E76 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Expertise</span>
                    </h2>
                    <p className="animate-slide-up delay-100" style={{
                        textAlign: 'center',
                        fontSize: '1.1rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Professional credentials and specialized training that inform my practice
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2.5rem',
                        marginBottom: '4rem'
                    }}>
                        {/* Education */}
                        <div className="glass-card animate-slide-up" style={{
                            padding: '2.5rem',
                            background: 'rgba(255, 255, 255, 0.95)',
                            borderTop: '4px solid rgb(255 34 53)'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #C68E76 0%, rgb(255 34 53) 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.8rem',
                                marginBottom: '1.5rem'
                            }}>
                                🎓
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                color: '#2C3E50',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                Education
                            </h3>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    color: '#C68E76',
                                    marginBottom: '0.5rem'
                                }}>
                                    Master's in Counselling Psychology
                                </h4>
                                <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
                                    University of Buea
                                </p>
                            </div>
                            <div>
                                <h4 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    color: '#C68E76',
                                    marginBottom: '0.5rem'
                                }}>
                                    Bachelor's Degree in Psychology
                                </h4>
                                <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
                                    Specialized in Human Development
                                </p>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="glass-card animate-slide-up delay-100" style={{
                            padding: '2.5rem',
                            background: 'rgba(255, 255, 255, 0.95)',
                            borderTop: '4px solid #C68E76'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, rgb(255 34 53) 0%, #C68E76 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.8rem',
                                marginBottom: '1.5rem'
                            }}>
                                📜
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                color: '#2C3E50',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                Certifications
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0
                            }}>
                                {[
                                    'Certified Life Coach (ICF Accredited)',
                                    'Emotional Intelligence Practitioner',
                                    'Family Systems Therapist',
                                    'Trauma-Informed Counselor',
                                    'Leadership Development Specialist'
                                ].map((cert, i) => (
                                    <li key={i} style={{
                                        padding: '0.75rem 0',
                                        color: '#475569',
                                        fontSize: '0.95rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        borderBottom: i < 4 ? '1px solid rgba(198, 142, 118, 0.1)' : 'none'
                                    }}>
                                        <span style={{ color: 'rgb(255 34 53)', fontSize: '1.2rem' }}>✓</span>
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Areas of Expertise */}
                        <div className="glass-card animate-slide-up delay-200" style={{
                            padding: '2.5rem',
                            background: 'rgba(255, 255, 255, 0.95)',
                            borderTop: '4px solid #2C3E50'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.8rem',
                                marginBottom: '1.5rem'
                            }}>
                                💡
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                color: '#2C3E50',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                Areas of Expertise
                            </h3>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.75rem'
                            }}>
                                {[
                                    'Identity Development',
                                    'Emotional Intelligence',
                                    'Leadership Coaching',
                                    'Family Systems',
                                    'Male Empowerment',
                                    'Soft Skills Training',
                                    'Conflict Resolution',
                                    'Public Speaking'
                                ].map((skill, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            background: 'rgba(198, 142, 118, 0.1)',
                                            borderRadius: '20px',
                                            color: '#C68E76',
                                            fontSize: '0.85rem',
                                            fontWeight: '500',
                                            border: '1px solid rgba(198, 142, 118, 0.2)'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Professional Summary */}
                    <div className="glass-card animate-slide-up delay-300" style={{
                        padding: '3rem',
                        background: 'rgba(255, 255, 255, 0.95)',
                        textAlign: 'center'
                    }}>
                        <h3 style={{
                            fontSize: '1.75rem',
                            marginBottom: '1.5rem',
                            color: '#2C3E50',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            Professional Summary
                        </h3>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#475569',
                            lineHeight: '1.8',
                            maxWidth: '900px',
                            margin: '0 auto'
                        }}>
                            With over a decade of experience in identity development and counseling, I bring a unique blend of academic excellence, professional certifications, and real-world impact. My approach integrates evidence-based practices with cultural sensitivity, creating transformative experiences for individuals, families, and organizations across diverse contexts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxImage && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.9)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        animation: 'fadeIn 0.3s ease'
                    }}
                    onClick={() => setLightboxImage(null)}
                >
                    <div
                        className="glass-card"
                        style={{
                            maxWidth: '900px',
                            width: '100%',
                            padding: '2rem',
                            animation: 'scaleIn 0.3s ease',
                            background: 'rgba(255, 255, 255, 0.95)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <h2 style={{
                                fontSize: '2rem',
                                color: 'var(--color-secondary)',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                {lightboxImage.title}
                            </h2>
                            <button
                                onClick={() => setLightboxImage(null)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '2rem',
                                    cursor: 'pointer',
                                    color: '#64748B',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.color = '#C68E76'}
                                onMouseOut={(e) => e.currentTarget.style.color = '#64748B'}
                            >
                                ×
                            </button>
                        </div>

                        <img
                            src={lightboxImage.image}
                            alt={lightboxImage.title}
                            style={{
                                width: '100%',
                                borderRadius: '12px',
                                marginBottom: '1.5rem',
                                maxHeight: '400px',
                                objectFit: 'cover'
                            }}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />

                        <p style={{
                            fontSize: '1.1rem',
                            color: '#475569',
                            lineHeight: '1.8',
                            marginBottom: '1.5rem'
                        }}>
                            {lightboxImage.description}
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '0.75rem',
                            flexWrap: 'wrap'
                        }}>
                            {lightboxImage.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    style={{
                                        padding: '0.5rem 1.25rem',
                                        borderRadius: '25px',
                                        background: 'linear-gradient(135deg, #C68E76 0%, rgb(255 34 53) 100%)',
                                        color: 'white',
                                        fontSize: '0.9rem',
                                        fontWeight: '600'
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        .project-overlay {
          opacity: 0;
        }
        .glass-card:hover .project-overlay {
          opacity: 1;
        }
      `}</style>
        </div>
    );
};

export default Portfolio;
