import React, { useEffect } from 'react';
import gsap from 'gsap';
import { PERSONAL } from '../data';

export default function About() {
    useEffect(() => {
        const reveals = document.querySelectorAll('#about .reveal');
        gsap.fromTo(reveals, 
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'power2.out' }
        );

        // Animate numeric counters only
        document.querySelectorAll('.counter[data-target]').forEach(c => {
            const target = parseFloat(c.getAttribute('data-target'));
            if (!isNaN(target) && Number.isInteger(target)) {
                gsap.fromTo(c, { innerHTML: 0 }, { innerHTML: target, duration: 1.5, snap: { innerHTML: 1 }, ease: 'power1.out' });
            }
        });
    }, []);

    const stats = [
        { value: '5+', label: 'PROJECTS', isNumeric: false },
        { value: '7', label: 'HACKATHONS', isNumeric: true, target: 7 },
        { value: '8.7', label: 'CGPA', isNumeric: false },
        { value: '2nd', label: 'YEAR', isNumeric: false },
    ];

    return (
        <section id="about" className="active" style={{ display: 'block' }}>
            <div className="section-inner two-col">
                <div className="about-left">
                    <div className="section-label font-mono reveal">02 &middot; ABOUT ME</div>
                    <h2 className="section-title reveal">Yug Gupta</h2>
                    <h3 className="about-title reveal" style={{ fontWeight: 500, color: 'var(--text2)', marginTop: '-0.5em', marginBottom: '1.2em', fontSize: '1.25rem' }}>
                        B.Tech CSE (AI for IoT) Student &amp; ML Enthusiast
                    </h3>
                    <p className="about-text reveal">{PERSONAL.about1}</p>
                    <p className="about-text reveal">{PERSONAL.about2}</p>

                    <div className="stats-grid reveal">
                        {stats.map((s, i) => (
                            <div className="stat-card" key={i}>
                                <div
                                    className={`stat-num${s.isNumeric ? ' counter' : ''}`}
                                    {...(s.isNumeric ? { 'data-target': s.target } : {})}
                                >
                                    {s.isNumeric ? '0' : s.value}
                                </div>
                                <div className="stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="pill-tags reveal">
                        <div className="pill">Currently learning &rarr; Deep Learning &amp; Edge AI</div>
                        <div className="pill">Currently building &rarr; CubeSat Collision Detection System</div>
                    </div>
                </div>
                <div className="about-right reveal">
                    <div className="about-visual">
                        <div style={{
                            background: 'var(--bg3)',
                            border: '1px solid var(--border)',
                            borderRadius: '14px',
                            padding: '24px',
                            width: '100%',
                            boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            {[
                                { label: 'Location', value: '📍 Delhi, India' },
                                { label: 'University', value: '🎓 Sharda University, Greater Noida' },
                                { label: 'Degree', value: '📚 B.Tech CSE — AI for IoT (2024–2028)' },
                                { label: 'CGPA', value: '⭐ 8.7' },
                                { label: 'Role', value: '💼 ML Intern @ Skillfied Mentor' },
                                { label: 'Status', value: '🟢 Open to Work' }
                            ].map((row, idx, arr) => (
                                <div key={idx} style={{ 
                                    padding: '12px 0', 
                                    borderBottom: idx !== arr.length - 1 ? '1px solid var(--border)' : 'none' 
                                }}>
                                    <div style={{ fontSize: '11px', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{row.label}</div>
                                    <div style={{ color: 'var(--text)', fontWeight: 500 }}>{row.value}</div>
                                </div>
                            ))}
                        </div>
                        <div className="pill-tags reveal" style={{ marginTop: '24px', justifyContent: 'center' }}>
                            <div className="pill" style={{ fontSize: '11px', padding: '4px 10px' }}>Leadership</div>
                            <div className="pill" style={{ fontSize: '11px', padding: '4px 10px' }}>Critical Thinking</div>
                            <div className="pill" style={{ fontSize: '11px', padding: '4px 10px' }}>Problem Solving</div>
                            <div className="pill" style={{ fontSize: '11px', padding: '4px 10px' }}>Analytical Thinking</div>
                            <div className="pill" style={{ fontSize: '11px', padding: '4px 10px' }}>Communication</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
