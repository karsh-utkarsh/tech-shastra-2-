import React, { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrameId;
        
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticle = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5 + 0.3,
            speedX: (Math.random() - 0.5) * 0.25,
            speedY: (Math.random() - 0.5) * 0.12 - 0.08,
            opacity: Math.random() * 0.4 + 0.1,
            hue: Math.random() * 80 + 190, // Blue to purple range
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.015 + 0.004,
        });

        const initParticles = () => {
            const count = Math.min(70, Math.floor(window.innerWidth * window.innerHeight / 18000));
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push(createParticle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;
                p.pulse += p.pulseSpeed;

                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = canvas.height + 10;
                if (p.y > canvas.height + 10) p.y = -10;

                const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
                const glow = p.size * 3;

                ctx.beginPath();
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glow);
                gradient.addColorStop(0, `hsla(${p.hue}, 70%, 70%, ${currentOpacity})`);
                gradient.addColorStop(1, `hsla(${p.hue}, 70%, 70%, 0)`);
                ctx.fillStyle = gradient;
                ctx.arc(p.x, p.y, glow, 0, Math.PI * 2);
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = `hsla(${p.hue}, 80%, 85%, ${currentOpacity * 1.5})`;
                ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
                ctx.fill();

                const dx = mouseX - p.x;
                const dy = mouseY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    p.x -= dx * force * 0.008;
                    p.y -= dy * force * 0.008;
                }
            });

            // Connection lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        const opacity = (1 - dist / 100) * 0.06;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(80, 140, 255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        resize();
        initParticles();
        animate();

        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas id="particleCanvas" ref={canvasRef} />;
};

export default ParticleCanvas;
