import React, { useEffect } from 'react';
import gsap from 'gsap';
import { EXPERIENCE, EDUCATION } from '../data';

export default function Experience() {
    useEffect(() => {
        const reveals = document.querySelectorAll('#experience .reveal');
        gsap.fromTo(reveals, 
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'power2.out' }
        );
    }, []);

    return (
        <section id="experience" className="active" style={{ display: 'block' }}>
            <div className="section-inner exp-layout">
                <div className="exp-left">
                    <div className="exp-sticky">
                        <div className="section-label font-mono reveal">05 &middot; EXPERIENCE</div>
                        <h2 className="section-title reveal">Career Path</h2>
                        <img src="/src/assets/career.png" alt="Career Path" className="reveal" style={{ width: '100%', maxWidth: '300px', borderRadius: '12px', marginTop: '20px', border: '1px solid var(--border)' }} />
                        <div className="exp-timeline-canvas reveal"></div>
                    </div>
                </div>
                <div className="exp-right">
                    <div>
                        {EXPERIENCE.map((e, i) => (
                            <div className="exp-entry reveal" key={i}>
                                <div className="exp-num">0{i+1}</div>
                                <div className="exp-role" style={{ color: '#ffffff', fontWeight: 600 }}>{e.role}</div>
                                <div className="exp-company" style={{ color: 'var(--accent)' }}>{e.company}</div>
                                <div className="exp-meta">
                                    <span>{e.start} &mdash; {e.end}</span>
                                    <span className="exp-type-badge">{e.type}</span>
                                    <span>{e.location}</span>
                                </div>
                                <ul className="exp-bullets">
                                    {e.bullets.map((b, idx) => <li key={idx} style={{ color: 'rgba(255,255,255,0.78)' }}>{b}</li>)}
                                </ul>
                                <div className="project-stack" style={{ marginTop: '16px' }}>
                                    {e.tech.map((t, idx) => <span key={idx} className="stack-tag" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}>{t}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <h3 className="font-bebas reveal" style={{ fontSize: '32px', margin: '40px 0 20px', color: '#ffffff', fontWeight: 500 }}>Education</h3>
                    <div>
                        {EDUCATION.map((e, i) => (
                            <div className="exp-entry reveal" key={i}>
                                <div className="exp-role" style={{ color: '#ffffff', fontWeight: 600 }}>{e.role}</div>
                                <div className="exp-company" style={{ color: 'var(--gold)' }}>{e.company}</div>
                                <div className="exp-meta">
                                    <span>{e.start} &mdash; {e.end}</span>
                                    <span className="exp-type-badge">{e.type}</span>
                                </div>
                                <ul className="exp-bullets">
                                    {e.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
