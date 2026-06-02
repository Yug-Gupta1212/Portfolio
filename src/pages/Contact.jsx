import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';
import { PERSONAL, SVG_ICONS } from '../data';

export default function Contact() {
    const canvasRef = useRef(null);
    const reqRef = useRef(null);

    useEffect(() => {
        const reveals = document.querySelectorAll('#contact .reveal');
        gsap.fromTo(reveals, 
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'power2.out' }
        );

        // Three.js Globe
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        const container = canvasRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const globeGeom = new THREE.SphereGeometry(2, 32, 32);
        const globeMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.1 });
        const globeMesh = new THREE.Mesh(globeGeom, globeMat);
        scene.add(globeMesh);

        camera.position.z = 5;

        const animate = () => {
            globeMesh.rotation.y += 0.002;
            globeMesh.rotation.x += 0.001;
            renderer.render(scene, camera);
            reqRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            if (reqRef.current) cancelAnimationFrame(reqRef.current);
            if (container && renderer.domElement) container.removeChild(renderer.domElement);
            scene.clear();
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const subject = formData.get('subject');
        const message = formData.get('message');
        const body = `Name: ${name}%0D%0A%0D%0A${message}`;
        window.location.href = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <section id="contact" className="active" style={{ display: 'block' }}>
            <div className="section-inner contact-layout">
                <div className="contact-left reveal">
                    <div className="section-label font-mono">08 &middot; CONTACT</div>
                    <h2 className="section-title" style={{ marginBottom: '10px' }}>Let's Connect</h2>
                    <p className="about-text" style={{ color: 'var(--text2)', maxWidth: '400px' }}>
                        I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>
                    
                    <div className="contact-info-list" style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                        <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="contact-social-btn" style={{ width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.08)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', transition: 'all 0.2s ease' }}>
                            <div style={{ width: '24px', height: '24px' }}>{SVG_ICONS.github}</div>
                        </a>
                        <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="contact-social-btn" style={{ width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.08)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', transition: 'all 0.2s ease' }}>
                            <div style={{ width: '24px', height: '24px' }}>{SVG_ICONS.linkedin}</div>
                        </a>
                        <a href={`mailto:${PERSONAL.email}`} className="contact-social-btn" style={{ width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.08)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', transition: 'all 0.2s ease' }}>
                            <div style={{ width: '24px', height: '24px' }}>{SVG_ICONS.email}</div>
                        </a>
                    </div>
                    
                    <div className="contact-globe-canvas" ref={canvasRef} style={{ marginTop: '40px', height: '300px' }}></div>
                </div>
                
                <div className="contact-right reveal">
                    <form className="contact-form" onSubmit={handleSubmit} style={{ background: 'var(--bg3)', padding: '32px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                        <div className="form-group">
                            <label>YOUR NAME</label>
                            <input type="text" name="name" className="form-control" required placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>SUBJECT</label>
                            <select name="subject" className="form-control" required defaultValue="General Inquiry">
                                <option value="Job Opportunity">Job Opportunity</option>
                                <option value="Freelance Project">Freelance Project</option>
                                <option value="Collaboration">Collaboration</option>
                                <option value="General Inquiry">General Inquiry</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>MESSAGE</label>
                            <textarea name="message" className="form-control" required placeholder="Hello there..." rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-submit" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
