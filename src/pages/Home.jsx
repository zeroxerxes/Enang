import React from 'react';
import { Link } from 'react-router-dom';
import StatsSection from '../components/StatsSection';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        minHeight: '95vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #FAF9F6 0%, #F5E6D3 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px'
      }}>
        {/* Decorative Background Elements */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(198, 142, 118, 0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '150px', height: '150px', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', background: 'rgba(198, 142, 118, 0.08)', transform: 'rotate(45deg)' }}></div>
        <div style={{ position: 'absolute', bottom: '30%', right: '15%', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)' }}></div>

        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap-reverse', position: 'relative', zIndex: 1 }}>
          <div style={{ flex: 1, minWidth: '300px', zIndex: 10 }}>
            <h1 className="animate-slide-up" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              Finding you ,<br />
              <span className="text-gradient">Building Communities.</span>
            </h1>
            <p className="animate-slide-up delay-100" style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '550px' }}>
              I am BENK. Award winning Human Development Expert, Seasoned helping Professional & Speaker,I help you find wholeness and Uniqueness.
            </p>
            <div className="animate-slide-up delay-200" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-primary">My Journey</Link>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>

          <div className="animate-scale-in delay-300" style={{ flex: 1, minWidth: '300px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div className="animate-float" style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              transform: 'rotate(2deg)',
              maxWidth: '450px',

            }}>
              <img src="/assets/profile-home.jpg" alt="Bernice Enang Nso Keshu" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(198, 142, 118, 0.3), transparent)',
                pointerEvents: 'none'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction / Mission */}
      <section className="section" style={{ backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Pattern */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', opacity: 0.03, backgroundImage: 'radial-gradient(circle, #C68E76 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="animate-slide-up" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Restoring <span className="text-gradient">Identity & Dignity</span></h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Welcome to a space of healing and growth. My work is rooted in the belief that every individual carries a unique identity and dignity that, when nurtured, can transform not just their own life, but their family and community.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              Through counselling, coaching, and community outreach, I walk with people—especially men and boys—on their journey to emotional health and responsible leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatsSection />

      {/* Visual Rhythm / Highlights */}
      <section className="section" style={{ background: 'linear-gradient(180deg, #FAF9F6 0%, #FFF5E6 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Elements */}
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.08)', filter: 'blur(40px)' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(198, 142, 118, 0.08)', filter: 'blur(50px)' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {/* Card 1 */}
            <div className="glass-card animate-slide-up delay-100">
              <div style={{ height: '220px', overflow: 'hidden', borderRadius: '16px', marginBottom: '1.5rem' }}>
                <img src="/assets/Benk Assist1.jpg" alt="Coaching" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>BENK Assist</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Professional coaching and soft skills training for individuals and organizations.
              </p>
              <Link to="/benk-assist" style={{ color: 'var(--color-primary)', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Learn More <span>&rarr;</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="glass-card animate-slide-up delay-200">
              <div style={{ height: '220px', overflow: 'hidden', borderRadius: '16px', marginBottom: '1.5rem' }}>
                <img src="/assets/Boys to Gentlemen pictures1.jpg" alt="Foundation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>First Housebond</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                A foundation dedicated to rebuilding families by empowering men and boys.
              </p>
              <Link to="/fihof" style={{ color: 'var(--color-primary)', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Our Mission <span>&rarr;</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="glass-card animate-slide-up delay-300">
              <div style={{ height: '220px', overflow: 'hidden', borderRadius: '16px', marginBottom: '1.5rem' }}>
                <img src="/assets/photo-1.jpg" alt="Speaking" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Speaking & Training</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Impactful workshops and seminars on emotional intelligence and leadership.
              </p>
              <Link to="/portfolio" style={{ color: 'var(--color-primary)', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                View Portfolio <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
