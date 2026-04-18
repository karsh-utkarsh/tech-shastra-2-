import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import ParticleCanvas from '../components/ParticleCanvas';
import MouseLight from '../components/MouseLight';
import TeamCard from '../components/TeamCard';
import { teams } from '../data/teamData';
import "../Styles/team.css";
function Team() {
    const [currentCategory, setCurrentCategory] = useState('core');
    const [switcherVisible, setSwitcherVisible] = useState(false);
    const [facultyVisible, setFacultyVisible] = useState(false);
    const [switchedVisible, setSwitchedVisible] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    const teamSwitcherRef = useRef(null);

    // Initial load animations
    useEffect(() => {
        const facTimer = setTimeout(() => {
            setFacultyVisible(true);
        }, 1000);

        const swTimer = setTimeout(() => {
            setSwitchedVisible(true);
        }, 1400);

        return () => {
            clearTimeout(facTimer);
            clearTimeout(swTimer);
        };
    }, []);

    // Scroll Observer for Switcher
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !switcherVisible) {
                        setSwitcherVisible(true);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '-50px 0px' }
        );

        if (teamSwitcherRef.current) {
            observer.observe(teamSwitcherRef.current);
        }

        return () => observer.disconnect();
    }, [switcherVisible]);

    const handleSwitchCategory = (category) => {
        if (category === currentCategory) return;
        
        setIsFadingOut(true);
        setSwitchedVisible(false);

        setTimeout(() => {
            setCurrentCategory(category);
            setIsFadingOut(false);
            
            // Allow DOM to update before showing again
            requestAnimationFrame(() => {
                setTimeout(() => {
                    setSwitchedVisible(true);
                }, 30);
            });
        }, 350);
    };

    const handleBackClick = (e) => {
        e.preventDefault();
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = '/';
        }
    };

    return (
        <div className="app-container">
            <ParticleCanvas />
            <MouseLight />
            <Navbar />

            <main className="main-content">
                <section className="hero-spacing"></section>

              

                <section className="team-header" id="teamHeader">
                    <div className="title-glow"></div>
                    <h1 className="team-title">OUR TEAM</h1>
                    <p className="team-subtitle">The visionaries powering the future</p>
                </section>

                <section className="faculty-section" id="facultySection">
                    <h2 className="section-heading">Faculty Coordinators</h2>
                    <div className="section-heading-line"></div>
                    <div className="team-grid faculty-grid">
                        {teams.faculty.map((member, i) => (
                            <TeamCard key={`faculty-${i}`} member={member} index={i} category="faculty" isVisible={facultyVisible} />
                        ))}
                    </div>
                </section>

                <div className="section-divider">
                    <div className="divider-line"></div>
                    <div className="divider-diamond"></div>
                    <div className="divider-line"></div>
                </div>

                <section 
                    className={`team-switcher-section ${switcherVisible ? 'visible' : ''}`} 
                    ref={teamSwitcherRef}
                >
                    <div className="team-switcher" id="teamSwitcher">
                        {[
                            { id: 'core', label: 'Core Team' },
                            { id: 'tech', label: 'Tech Team' },
                            { id: 'design', label: 'Design Team' },
                            { id: 'leads', label: 'Leads' },
                            { id: 'volunteers', label: 'Volunteers' }
                        ].map(cat => (
                            <button 
                                key={cat.id}
                                className={`switch-btn ${currentCategory === cat.id ? 'active' : ''}`} 
                                onClick={() => handleSwitchCategory(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="team-grid-section switched-grid-section">
                    <div className="team-grid">
                        {teams[currentCategory] && teams[currentCategory].length > 0 ? (
                            teams[currentCategory].map((member, i) => (
                                <TeamCard 
                                    key={`${currentCategory}-${i}`} 
                                    member={member} 
                                    index={i} 
                                    category={currentCategory} 
                                    isVisible={switchedVisible} 
                                    isFadingOut={isFadingOut}
                                />
                            ))
                        ) : (
                            <div className={`coming-soon-message ${switchedVisible && !isFadingOut ? 'visible' : ''}`}>
                                <h3>Stay Tuned!</h3>
                                <p>Announcing Soon...</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <div className="footer-glow"></div>
        </div>
    );
}

export default Team;
