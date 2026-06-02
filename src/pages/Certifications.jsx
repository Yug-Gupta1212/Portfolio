import React, { useEffect } from 'react';
import gsap from 'gsap';
import { CERTS, ACHIEVEMENTS } from '../data';

export default function Certifications() {
    useEffect(() => {
        const reveals = document.querySelectorAll('#certifications .reveal');
        gsap.fromTo(reveals, 
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'power2.out' }
        );
    }, []);

    return (
        <section id="certifications" className="active" style={{ display: 'block' }}>
            <div className="section-inner">
                <div className="section-label font-mono reveal">06 &middot; CERTIFICATIONS</div>
                <h2 className="section-title reveal">Continuous Learning</h2>

                {/* 3-column cert cards */}
                <div className="certs-featured reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '32px' }}>
                    {CERTS.map((c, i) => (
                        <div className="cert-card" key={i}>
                            <div className="cert-logo" style={{ background: i === 0 ? 'var(--accent)' : '#d35400' }}>{c.org.charAt(0)}</div>
                            <div>
                                <div className="cert-name">{c.name}</div>
                                <div className="cert-org" style={{ color: 'var(--accent)' }}>{c.org}</div>
                            </div>
                            <div className="cert-meta">ISSUED: {c.date}<br/>ID: {c.id}</div>
                            <a href={c.url} className="btn btn-outline" style={{ marginTop: '8px' }} target="_blank" rel="noreferrer">{c.buttonLabel || 'View Certificate'}</a>
                        </div>
                    ))}
                </div>

                <h3 className="font-bebas reveal" style={{ fontSize: '32px', margin: '40px 0 20px', borderTop: '1px solid var(--border)', paddingTop: '40px' }}>ACHIEVEMENTS</h3>
                <div className="certs-featured reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', marginBottom: '32px' }}>
                    {ACHIEVEMENTS.map((a, i) => (
                        <div className="cert-card" key={i} style={{ borderLeft: '6px solid var(--gold)', background: 'var(--bg3)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(245, 200, 66, 0.15)', color: 'var(--gold)', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>🏆 Verified Achievement</div>
                            <div style={{ fontWeight: 700, fontSize: '1.2em', marginBottom: 4, paddingRight: '120px' }}>{a.name}</div>
                            <div style={{ color: 'var(--gold)', fontWeight: 500, marginBottom: 12 }}>{a.org}</div>
                            <div style={{ color: 'var(--text2)', fontSize: '0.98em', marginBottom: 8 }}>{a.detail}</div>
                            {a.url && a.url !== '#' && <a href={a.url} className="btn btn-outline" style={{ marginTop: '8px', display: 'inline-flex' }} target="_blank" rel="noreferrer">{a.buttonLabel || 'View Certificate'}</a>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
