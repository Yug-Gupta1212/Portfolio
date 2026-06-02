import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import gsap from 'gsap';
import { PERSONAL, SVG_ICONS } from '../data';

export default function Hero() {
    const canvasRef = useRef(null);
    const bgTextRef = useRef(null);
    const reqRef = useRef(null);

    useEffect(() => {
        // Initial animation
        const reveals = document.querySelectorAll('#hero .reveal');
        gsap.fromTo(reveals, 
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'power2.out' }
        );

        // Three.js setup
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        const container = canvasRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Particles
        const particlesGeom = new THREE.BufferGeometry();
        const particlesCount = 1200;
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 20;
        }
        particlesGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const material = new THREE.PointsMaterial({ size: 0.02, color: 0xffffff, transparent: true, opacity: 0.85 });
        const particlesMesh = new THREE.Points(particlesGeom, material);
        scene.add(particlesMesh);

        // Icosahedron
        const icoGeom = new THREE.IcosahedronGeometry(1.8, 1);
        const icoMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.25 });
        const icoMesh = new THREE.Mesh(icoGeom, icoMat);
        icoMesh.position.x = 3;
        scene.add(icoMesh);

        camera.position.z = 5;

        let mouseX = 0; let mouseY = 0;
        const handleMouseMove = (e) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            
            // Parallax
            if (bgTextRef.current) {
                const xShift = (e.clientX / window.innerWidth - 0.5) * -10;
                bgTextRef.current.style.transform = `translate(-50%, -50%) translateX(${xShift}px)`;
            }
        };
        document.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            particlesMesh.rotation.y += 0.0015;
            particlesMesh.rotation.x += 0.00075;
            
            icoMesh.rotation.x += 0.002;
            icoMesh.rotation.y += 0.003;
            
            icoMesh.rotation.x += (mouseY * 0.5 - icoMesh.rotation.x) * 0.05;
            icoMesh.rotation.y += (mouseX * 0.5 - icoMesh.rotation.y) * 0.05;
            
            renderer.render(scene, camera);
            reqRef.current = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (reqRef.current) cancelAnimationFrame(reqRef.current);
            container.removeChild(renderer.domElement);
            scene.clear();
        };
    }, []);

    return (
        <section id="hero" className="active" style={{ display: 'flex' }}>
            <div className="hero-canvas" ref={canvasRef}></div>
            {/* Background PORTFOLIO word — truly behind everything */}
            <div
                className="hero-bg-text font-bebas"
                ref={bgTextRef}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0,
                    opacity: 0.6,
                    pointerEvents: 'none',
                    color: 'var(--accent)',
                    whiteSpace: 'nowrap',
                }}
            >
                PORTFOLIO
            </div>

            {/* Main hero content */}
            <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
                <div className="hero-top reveal">
                    <span className="micro-label font-mono">CREATIVE PORTFOLIO &middot; {new Date().getFullYear()}</span>
                </div>

                <div className="hero-center" style={{ marginTop: '-120px' }}>
                    {/* Name — well above PORTFOLIO background word */}
                    <h1 className="hero-name font-bebas reveal" style={{
                        color: '#fff',
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: 'clamp(40px, 6vw, 90px)',
                        margin: 0,
                        marginBottom: '0.15em',
                        letterSpacing: '0.04em',
                        textShadow: '0 2px 30px rgba(0,0,0,0.9)',
                        position: 'relative',
                        zIndex: 3,
                        textAlign: 'left',
                    }}>
                        YUG GUPTA
                    </h1>

                    <div className="hero-actions reveal" style={{ justifyContent: 'flex-start' }}>
                        <Link to="/projects" className="btn btn-primary">View My Work</Link>
                        <Link to="/contact" className="btn btn-outline">Let's Talk</Link>
                    </div>
                    {/* Socials: Only GitHub, LinkedIn, Email */}
                    <div className="hero-socials reveal" style={{ justifyContent: 'flex-start' }}>
                        <a href={PERSONAL.github} target="_blank" rel="noreferrer">{SVG_ICONS.github}</a>
                        <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer">{SVG_ICONS.linkedin}</a>
                        <a href={`mailto:${PERSONAL.email}`}>{SVG_ICONS.email}</a>
                    </div>
                </div>

                <div className="hero-bottom reveal">
                    <span className="font-mono" style={{ fontSize: '12px', color: 'var(--text2)' }}>2024300275.yug@ug.sharda.ac.in</span>
                    <div className="hero-scroll">
                        <svg viewBox="0 0 24 24"><path d="M12 16l-6-6h12z"/></svg>
                        <span>Scroll to explore</span>
                    </div>
                    <span className="font-mono" style={{ fontSize: '12px', color: 'var(--text2)' }}>DELHI, INDIA</span>
                </div>
            </div>

            {/* 3D Robot widget, bottom-right */}
            <div
                className="hero-robot-widget robot-corner"
                style={{
                    position: 'fixed',
                    bottom: '0px',
                    right: '16px',
                    width: '240px',
                    height: '240px',
                    zIndex: 50,
                    pointerEvents: 'auto',
                }}
            >
                {/* Speech bubble — always visible, above the robot */}
                <div style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '20px',
                    background: 'rgba(30,28,28,0.92)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '14px',
                    padding: '8px 14px',
                    fontSize: '13px',
                    color: '#f2ede8',
                    whiteSpace: 'nowrap',
                    backdropFilter: 'blur(12px)',
                    pointerEvents: 'none',
                    zIndex: 60,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}>👋 Hello there! Welcome to my portfolio
                    <div style={{
                        position: 'absolute',
                        bottom: '-6px',
                        right: '24px',
                        width: '0',
                        height: '0',
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderTop: '6px solid rgba(30,28,28,0.92)'
                    }}></div>
                </div>
                
                {/* Iframe wrapper — overflow hidden crops the Spline watermark */}
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                    <iframe
                        src="https://my.spline.design/genkubgreetingrobot-eZTR3Gu4jf05pfN6UIwg6sne/"
                        frameBorder="0"
                        style={{ 
                            position: 'absolute', 
                            top: 0, 
                            left: 0, 
                            border: 'none', 
                            width: '100%', 
                            height: '130%'
                        }}
                        title="3D Robot"
                    ></iframe>
                </div>
            </div>

            {/* Floating animation keyframes */}
            <style>{`
                @keyframes robotFloat {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                    100% { transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}
