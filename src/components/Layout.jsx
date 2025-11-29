import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

const Layout = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <ParticleBackground density={50} color="rgba(198, 142, 118, 0.3)" />
            <Navbar />
            <main style={{ flex: 1, paddingTop: '80px', position: 'relative' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
