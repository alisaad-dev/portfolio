import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 72;
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="hero-role">Full-stack developer &amp; DevOps engineer</p>
          <h1 className="hero-brand">Ali Saad</h1>
          <p className="hero-lede">
            I build scalable web applications and the cloud infrastructure that
            keeps them running in production.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View projects
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => scrollToSection('contact')}
            >
              Get in touch
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-portrait">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.png`}
              alt="Ali Saad"
              className="hero-portrait-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
