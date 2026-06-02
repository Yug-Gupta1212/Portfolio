import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { SKILLS } from '../data';

export default function Skills() {
    // Default to AI & ML tab
    const [filter, setFilter] = useState('aiml');

    useEffect(() => {
        const reveals = document.querySelectorAll('#skills .reveal');
        gsap.fromTo(reveals, 
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'power2.out' }
        );
    }, []);

    useEffect(() => {
        document.querySelectorAll('.skill-bar-fill').forEach(bar => {
            bar.style.width = '0%';
            setTimeout(() => bar.style.width = bar.getAttribute('data-width'), 100);
        });
    }, [filter]);

    const filteredSkills = SKILLS.filter(s => filter === 'all' || s.category === filter);

    return (
        <section id="skills" className="active" style={{ display: 'block' }}>
            <div className="canvas-bg"></div>
            <div className="section-inner">
                <div className="section-label font-mono reveal">03 &middot; SKILLS</div>
                <h2 className="section-title reveal">Technical Arsenal</h2>

                <div className="filter-tabs reveal">
                    <button className={`filter-btn ${filter === 'aiml' ? 'active' : ''}`} onClick={() => setFilter('aiml')}>AI & ML</button>
                    <button className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`} onClick={() => setFilter('frontend')}>Frontend</button>
                    <button className={`filter-btn ${filter === 'backend' ? 'active' : ''}`} onClick={() => setFilter('backend')}>Backend</button>
                    <button className={`filter-btn ${filter === 'languages' ? 'active' : ''}`} onClick={() => setFilter('languages')}>Languages</button>
                    <button className={`filter-btn ${filter === 'tools' ? 'active' : ''}`} onClick={() => setFilter('tools')}>Tools & Concepts</button>
                    <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                </div>

                <div className="skills-grid reveal">
                    {filteredSkills.map((s, i) => (
                        <div className="skill-card" key={i}>
                            <div className="skill-name">{s.name}</div>
                            <div className="skill-bar-bg"><div className="skill-bar-fill" data-width={`${s.level}%`}></div></div>
                            <div className="skill-meta"><span>{s.label}</span> <span>{s.level}%</span></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
