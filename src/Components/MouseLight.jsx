import React, { useEffect, useRef } from 'react';

const MouseLight = () => {
    const lightRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (lightRef.current) {
                lightRef.current.style.left = e.clientX + 'px';
                lightRef.current.style.top = e.clientY + 'px';
                lightRef.current.style.opacity = '1';
            }

            // Tilt effect logic
            const cards = document.querySelectorAll('.team-card.visible');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const cardCenterX = rect.left + rect.width / 2;
                const cardCenterY = rect.top + rect.height / 2;
                const deltaX = (e.clientX - cardCenterX) / rect.width;
                const deltaY = (e.clientY - cardCenterY) / rect.height;
                const dist = Math.sqrt(deltaX ** 2 + deltaY ** 2);

                if (dist < 1.2) {
                    const tiltX = deltaY * 4;
                    const tiltY = -deltaX * 4;
                    card.style.transform = `translateY(-4px) scale(1) perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
                } else {
                    card.style.transform = '';
                }
            });
        };

        const handleMouseLeave = () => {
            if (lightRef.current) {
                lightRef.current.style.opacity = '0';
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return <div id="mouseLight" ref={lightRef}></div>;
};

export default MouseLight;
