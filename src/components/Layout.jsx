import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { PERSONAL, SVG_ICONS } from '../data';

export default function Layout() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [cursorStyle, setCursorStyle] = useState({ left: '-100px', top: '-100px', transform: 'translate(-50%, -50%) scale(1)' });
    const [cursorHover, setCursorHover] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = height ? (winScroll / height) * 100 : 0;
            setScrollProgress(scrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const moveCursor = (e) => {
            setCursorStyle(prev => ({ ...prev, left: `${e.clientX}px`, top: `${e.clientY}px` }));
        };
        const mousedown = () => setCursorStyle(prev => ({ ...prev, transform: 'translate(-50%, -50%) scale(0.8)' }));
        const mouseup = () => setCursorStyle(prev => ({ ...prev, transform: 'translate(-50%, -50%) scale(1)' }));

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mousedown', mousedown);
        document.addEventListener('mouseup', mouseup);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mousedown', mousedown);
            document.removeEventListener('mouseup', mouseup);
        };
    }, []);

    useEffect(() => {
        const addHover = () => setCursorHover(true);
        const removeHover = () => setCursorHover(false);
        const elements = document.querySelectorAll('a, button, .skill-card, .project-card, .cert-card');
        elements.forEach(el => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });
        return () => {
            elements.forEach(el => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
        };
    }, [location.pathname]); // re-run when path changes

    // determine active section number
    const routes = ['/', '/about', '/skills', '/projects', '/experience', '/certifications', '/contact'];
    let currentIdx = routes.indexOf(location.pathname) + 1;
    if (currentIdx === 0) currentIdx = 1;

    return (
        <>
            <div className="noise-overlay"></div>
            <div className={`cursor-dot ${cursorHover ? 'hover' : ''}`} style={cursorStyle}></div>

            <div className="app-container">
                <aside className="sidebar-left">
                    <Link to="/" className="logo-vertical">{PERSONAL.initials}</Link>
                    <div className="sb-divider"></div>
                    <div className="social-icons">
                        <a href={PERSONAL.github} title="GitHub" target="_blank" rel="noreferrer">{SVG_ICONS.github}</a>
                        <a href={PERSONAL.linkedin} title="LinkedIn" target="_blank" rel="noreferrer">{SVG_ICONS.linkedin}</a>
                        <a href={`mailto:${PERSONAL.email}`} title="Email">{SVG_ICONS.email}</a>
                    </div>
                    <div className="location-vertical">{PERSONAL.location.toUpperCase()} — {new Date().getFullYear()}</div>
                </aside>

                <nav className="top-nav">
                    <Link to="/" className="nav-logo font-bebas">{PERSONAL.name.toUpperCase()}</Link>
                    <ul className="nav-links">
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                        <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
                        <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
                        <li><Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link></li>
                        <li><Link to="/certifications" className={location.pathname === '/certifications' ? 'active' : ''}>Certifications</Link></li>
                        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                    </ul>
                    <div className="nav-actions">
                        <div className="availability-badge">
                            <div className="status-dot"></div> <span>{PERSONAL.availability}</span>
                        </div>
                        <a href="/yug.resume.pdf" download="Yug_Gupta_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: 'fit-content' }}>Download Resume</a>
                        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                            <svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                        </button>
                    </div>
                </nav>

                <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                    {routes.map((path, i) => {
                        const labels = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'];
                        return (
                            <Link key={path} to={path} className={location.pathname === path ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                                {labels[i]}
                            </Link>
                        );
                    })}
                </div>

                <main className="main-content">
                    <Outlet />
                </main>
            </div>

            <footer>
                <div className="footer-watermark font-bebas">{PERSONAL.name.toUpperCase()}</div>
                <div className="footer-text">&copy; {new Date().getFullYear()} <span>{PERSONAL.name}</span>. All rights reserved.</div>
                <div className="footer-nav">
                    <Link to="/projects">Work</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="footer-text">Built with React + Three.js</div>
            </footer>
        </>
    );
}
