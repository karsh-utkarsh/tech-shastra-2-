import React, { useEffect, useState } from 'react';
import { LinkedinIcon, GithubIcon, IntagramIcon, WebsiteIcon, PhoneIcon, UserIcon } from './Icons';

const TeamCard = ({ member, index, category, isVisible, isFadingOut }) => {
    const hasImage = member.image && member.image.trim() !== '';

    return (
        <div 
            className={`team-card card-stagger-${Math.min(index + 1, 9)} ${isVisible ? 'visible' : ''} ${isFadingOut ? 'fade-out' : ''}`} 
            id={`card-${category}-${index}`}
            style={isVisible ? { transitionDelay: `${index * 0.08}s`, transition: '' } : { transition: 'none' }}
        >
            <div className="card-frame-corner tl"></div>
            <div className="card-frame-corner tr"></div>
            <div className="card-frame-corner bl"></div>
            <div className="card-frame-corner br"></div>
            
            <div className="card-image-wrapper">
                {hasImage ? (
                    <img className="card-image" src={member.image} alt={member.name} loading="lazy" />
                ) : (
                    <div className="card-image-placeholder">
                        <div className="placeholder-icon"><UserIcon /></div>
                    </div>
                )}
            </div>
            
            <div className="card-info">
                <h3 className="card-name">{member.name}</h3>
                <p className="card-role">{member.role}</p>
                
                <div className="card-socials">
                    {category === 'faculty' && member.website && (
                        <a href={member.website} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="University Website" title="University Page"><WebsiteIcon /></a>
                    )}
                    {category === 'core' && member.phone && (
                        <a href={`tel:${member.phone}`} className="social-icon" aria-label="Contact" title="Contact"><PhoneIcon /></a>
                    )}
                    {category === 'core' && member.linkedin && (
                        <a href={member.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedinIcon /></a>
                    )}
                    {category === 'core' && member.instagram && (
                        <a href={member.instagram} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><IntagramIcon /></a>
                    )}
                    {category === 'tech' && member.linkedin && (
                        <a href={member.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedinIcon /></a>
                    )}
                    {category === 'tech' && member.github && (
                        <a href={member.github} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><GithubIcon /></a>
                    )}
                    {['design', 'leads', 'volunteers'].includes(category) && member.linkedin && (
                        <a href={member.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedinIcon /></a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
