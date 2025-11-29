import React, { useState, useEffect } from 'react';

const LoadingSplash = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, #FAF9F6 0%, #FFFFFF 50%, #FAF9F6 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      animation: progress >= 100 ? 'fadeOut 0.5s ease-out forwards' : 'none',
      pointerEvents: progress >= 100 ? 'none' : 'all'
    }}>
      {/* Animated Logo */}
      <div style={{
        width: '120px',
        height: '120px',
        borderRadius: '24px',
        background: 'linear-gradient(135deg, #C68E76 0%, #D4AF37 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '3rem',
        fontWeight: '700',
        fontFamily: 'var(--font-heading)',
        boxShadow: '0 20px 60px rgba(198, 142, 118, 0.4)',
        animation: 'pulse 2s ease-in-out infinite',
        marginBottom: '2rem'
      }}>
        BK
      </div>

      {/* Brand Name */}
      <h1 style={{
        fontSize: '2rem',
        fontWeight: '700',
        fontFamily: 'var(--font-heading)',
        background: 'linear-gradient(135deg, #2C3E50 0%, #C68E76 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '0.5rem',
        animation: 'slideUp 0.8s ease-out'
      }}>
        Bernice Keshu
      </h1>

      {/* Tagline */}
      <p style={{
        fontSize: '0.9rem',
        color: '#64748B',
        fontWeight: '500',
        letterSpacing: '2px',
        marginBottom: '3rem',
        animation: 'slideUp 0.8s ease-out 0.2s backwards'
      }}>
        IDENTITY • HEALING • GROWTH
      </p>

      {/* Progress Bar Container */}
      <div style={{
        width: '300px',
        height: '4px',
        background: 'rgba(198, 142, 118, 0.1)',
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Progress Bar Fill */}
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, #C68E76 0%, #D4AF37 100%)',
          borderRadius: '10px',
          width: `${progress}%`,
          transition: 'width 0.3s ease',
          boxShadow: '0 0 10px rgba(198, 142, 118, 0.5)'
        }}></div>
      </div>

      {/* Loading Text */}
      <p style={{
        marginTop: '1.5rem',
        fontSize: '0.9rem',
        color: '#94A3B8',
        fontWeight: '500'
      }}>
        {progress < 100 ? 'Loading...' : 'Welcome!'}
      </p>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: `rgba(198, 142, 118, ${0.3 - i * 0.05})`,
            top: `${20 + i * 10}%`,
            left: `${10 + i * 15}%`,
            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`
          }}
        ></div>
      ))}

      <style>{`
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 20px 60px rgba(198, 142, 118, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 25px 70px rgba(198, 142, 118, 0.6);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(-10px) translateX(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSplash;
