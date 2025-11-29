import React from 'react';

const Timeline = ({ events }) => {
    return (
        <div style={{ position: 'relative', padding: '2rem 0' }}>
            {/* Center Line */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '3px',
                background: 'linear-gradient(180deg, transparent 0%, #C68E76 10%, #C68E76 90%, transparent 100%)',
                transform: 'translateX(-50%)',
                zIndex: 0
            }}></div>

            {events.map((event, index) => {
                const isLeft = index % 2 === 0;

                return (
                    <div
                        key={index}
                        className="animate-slide-up"
                        style={{
                            display: 'flex',
                            justifyContent: isLeft ? 'flex-end' : 'flex-start',
                            alignItems: 'center',
                            marginBottom: '4rem',
                            position: 'relative',
                            animationDelay: `${index * 0.2}s`
                        }}
                    >
                        {/* Timeline Content */}
                        <div style={{
                            width: '45%',
                            padding: isLeft ? '0 3rem 0 0' : '0 0 0 3rem',
                            textAlign: isLeft ? 'right' : 'left'
                        }}>
                            <div
                                className="glass-card"
                                style={{
                                    padding: '2rem',
                                    position: 'relative',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.03)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                }}
                            >
                                {/* Arrow pointing to center */}
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    [isLeft ? 'right' : 'left']: '-12px',
                                    transform: 'translateY(-50%)',
                                    width: 0,
                                    height: 0,
                                    borderTop: '12px solid transparent',
                                    borderBottom: '12px solid transparent',
                                    [isLeft ? 'borderRight' : 'borderLeft']: '12px solid rgba(255, 255, 255, 0.9)'
                                }}></div>

                                {/* Year/Date */}
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.4rem 1rem',
                                    borderRadius: '20px',
                                    background: 'linear-gradient(135deg, #C68E76 0%, #D4AF37 100%)',
                                    color: 'white',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    boxShadow: '0 4px 12px rgba(198, 142, 118, 0.3)'
                                }}>
                                    {event.year}
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '0.75rem',
                                    color: 'var(--color-secondary)',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {event.title}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    color: '#64748B',
                                    lineHeight: '1.7',
                                    fontSize: '1rem',
                                    fontFamily: 'var(--font-body)'
                                }}>
                                    {event.description}
                                </p>

                                {/* Icon/Image if provided */}
                                {event.icon && (
                                    <div style={{
                                        marginTop: '1rem',
                                        fontSize: '2rem'
                                    }}>
                                        {event.icon}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Center Dot */}
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #C68E76 0%, #D4AF37 100%)',
                            border: '4px solid white',
                            boxShadow: '0 0 0 4px rgba(198, 142, 118, 0.2), 0 4px 12px rgba(0,0,0,0.15)',
                            zIndex: 2,
                            transition: 'all 0.3s ease'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateX(-50%) scale(1.3)';
                                e.currentTarget.style.boxShadow = '0 0 0 8px rgba(198, 142, 118, 0.3), 0 6px 16px rgba(0,0,0,0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
                                e.currentTarget.style.boxShadow = '0 0 0 4px rgba(198, 142, 118, 0.2), 0 4px 12px rgba(0,0,0,0.15)';
                            }}
                        ></div>
                    </div>
                );
            })}

            {/* End Cap */}
            <div style={{
                position: 'absolute',
                left: '50%',
                bottom: '-20px',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#C68E76',
                boxShadow: '0 0 0 4px rgba(198, 142, 118, 0.2)'
            }}></div>
        </div>
    );
};

export default Timeline;
