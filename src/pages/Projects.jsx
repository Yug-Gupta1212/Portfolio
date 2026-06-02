import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { PROJECTS } from '../data';

const getSVGForProject = (title) => {
    if (title.includes('CubeSat')) return (
        <svg viewBox="0 0 400 300" width="100%" height="100%" style={{opacity: 0.85, position: 'absolute', top:0, left:0, objectFit: 'cover'}}>
            <rect width="400" height="300" fill="#0b0b0e"/>
            <circle cx="200" cy="150" r="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"/>
            <circle cx="200" cy="150" r="120" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"/>
            <path d="M200 150 L280 90" stroke="var(--accent)" strokeWidth="2" strokeDasharray="5,5"/>
            <circle cx="280" cy="90" r="4" fill="var(--accent)"/>
            <circle cx="150" cy="80" r="2" fill="#fff"/>
            <circle cx="100" cy="200" r="1.5" fill="#fff"/>
            <circle cx="300" cy="250" r="2.5" fill="#fff"/>
            <circle cx="200" cy="150" r="30" fill="url(#earth)"/>
            <defs>
                <radialGradient id="earth" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#4361ee" />
                    <stop offset="100%" stopColor="#0b132b" />
                </radialGradient>
            </defs>
        </svg>
    );
    if (title.includes('Kin Well')) return (
        <svg viewBox="0 0 400 300" width="100%" height="100%" style={{opacity: 0.85, position: 'absolute', top:0, left:0, objectFit: 'cover'}}>
            <rect width="400" height="300" fill="#0b0b0e"/>
            <rect x="150" y="50" width="100" height="200" rx="12" fill="#1a1a24" stroke="rgba(255,255,255,0.1)"/>
            <rect x="160" y="80" width="80" height="60" rx="6" fill="rgba(255,255,255,0.05)"/>
            <path d="M165 120 Q180 90 195 110 T225 100" stroke="var(--accent)" strokeWidth="2" fill="none"/>
            <rect x="160" y="150" width="80" height="15" rx="4" fill="rgba(255,255,255,0.05)"/>
            <rect x="160" y="175" width="80" height="15" rx="4" fill="rgba(255,255,255,0.05)"/>
            <rect x="160" y="200" width="80" height="15" rx="4" fill="rgba(255,255,255,0.05)"/>
        </svg>
    );
    if (title.includes('Fresh Mate')) return (
        <svg viewBox="0 0 400 300" width="100%" height="100%" style={{opacity: 0.85, position: 'absolute', top:0, left:0, objectFit: 'cover'}}>
            <rect width="400" height="300" fill="#0b0b0e"/>
            <rect x="50" y="50" width="300" height="200" rx="8" fill="#1a1a24" stroke="rgba(255,255,255,0.1)"/>
            <rect x="70" y="70" width="170" height="80" rx="6" fill="rgba(255,255,255,0.05)"/>
            <rect x="250" y="70" width="80" height="80" rx="6" fill="rgba(255,255,255,0.05)"/>
            <rect x="70" y="160" width="260" height="70" rx="6" fill="rgba(255,255,255,0.05)"/>
            <circle cx="290" cy="110" r="20" stroke="var(--green)" strokeWidth="4" fill="none" strokeDasharray="100" strokeDashoffset="25"/>
            <path d="M80 195 L120 180 L160 210 L200 170 L240 190 L280 165 L320 190" stroke="var(--accent)" strokeWidth="2" fill="none"/>
        </svg>
    );
    if (title.includes('Zenvita')) return (
        <svg viewBox="0 0 400 300" width="100%" height="100%" style={{opacity: 0.85, position: 'absolute', top:0, left:0, objectFit: 'cover'}}>
            <rect width="400" height="300" fill="#0b0b0e"/>
            <rect x="60" y="60" width="280" height="180" rx="6" fill="#1a1a24" stroke="rgba(255,255,255,0.1)"/>
            <rect x="60" y="60" width="280" height="20" fill="rgba(255,255,255,0.05)"/>
            <circle cx="75" cy="70" r="3" fill="#ff5f56"/>
            <circle cx="85" cy="70" r="3" fill="#ffbd2e"/>
            <circle cx="95" cy="70" r="3" fill="#27c93f"/>
            <path d="M185 150 C185 130 200 130 200 150 C200 130 215 130 215 150 C215 170 200 170 200 150 C200 170 185 170 185 150 Z" fill="var(--accent)"/>
            <circle cx="200" cy="150" r="8" fill="#1a1a24"/>
        </svg>
    );
    return null;
};

export default function Projects() {
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const reveals = document.querySelectorAll('#projects .reveal');
        gsap.fromTo(reveals, 
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'power2.out' }
        );
    }, []);

    const filtered = PROJECTS.filter(p => filter === 'all' || p.category === filter);
    const featured = filtered.find(p => p.featured) || filtered[0];
    const others = filtered.filter(p => p !== featured);

    return (
        <section id="projects" className="active" style={{ display: 'block' }}>
            <div className="section-inner">
                <div className="section-label font-mono reveal">04 &middot; SELECTED WORKS</div>
                <h2 className="section-title reveal">Featured Projects</h2>
                
                <div className="filter-tabs reveal" style={{ marginBottom: '24px' }}>
                    <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                    <button className={`filter-btn ${filter === 'aiml' ? 'active' : ''}`} onClick={() => setFilter('aiml')}>AI/ML</button>
                    <button className={`filter-btn ${filter === 'web' ? 'active' : ''}`} onClick={() => setFilter('web')}>Web</button>
                    <button className={`filter-btn ${filter === 'iot' ? 'active' : ''}`} onClick={() => setFilter('iot')}>IoT</button>
                </div>
                
                {featured && (
                    <div className="featured-project reveal" style={{ display: 'grid' }}>
                        <div className="fp-content">
                            <div className="fp-cat font-mono">{featured.category.toUpperCase()}</div>
                            <h3 className="fp-title font-bebas">{featured.title}</h3>
                            <p className="fp-desc">{featured.description}</p>
                            <div className="project-stack" style={{ marginBottom: '24px' }}>
                                {featured.stack.map((t, i) => <span key={i} className="stack-tag">{t}</span>)}
                            </div>
                            <div className="fp-metric">{featured.metric}</div>
                            <div className="fp-actions">
                                <a href={featured.github} className="btn btn-primary" target="_blank" rel="noreferrer">View Repo</a>
                            </div>
                        </div>
                        <div className="fp-visual">
                            <div className="fp-wash"></div>
                            <div className="device-frame" style={{ overflow: 'hidden', padding: 0 }}>
                                {featured.image ? <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : getSVGForProject(featured.title)}
                            </div>
                        </div>
                    </div>
                )}
                
                <div className="projects-grid reveal">
                    {others.map((p, idx) => (
                        <div className="project-card" key={idx}>
                            <div className="project-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
                                {p.image ? <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : getSVGForProject(p.title)}
                                <div className="cat-badge" style={{ zIndex: 2 }}>{p.category.toUpperCase()}</div>
                            </div>
                            <div className="project-body">
                                <h3>{p.title}</h3>
                                <p>{p.description}</p>
                                <div className="project-stack">
                                    {p.stack.map((t, i) => <span key={i} className="stack-tag">{t}</span>)}
                                </div>
                                <div className="project-metric">{p.metric}</div>
                                <div className="project-actions">
                                    <a href={p.github} className="btn btn-outline" target="_blank" rel="noreferrer">View Repo</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
