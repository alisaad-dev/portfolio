import React from 'react';
import './About.css';

const About = () => {
  const services = [
    {
      title: 'Backend',
      description: 'APIs, databases, and server-side systems built for scale and security.',
    },
    {
      title: 'Frontend',
      description: 'Clear, responsive interfaces that stay fast on real devices.',
    },
    {
      title: 'DevOps',
      description: 'Docker, Nginx, CI/CD, SSL, and cloud setups that stay reliable.',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-main">
          <h2 className="about-title">About</h2>
          <div className="about-text">
            <p>
              I&apos;m a full-stack developer and DevOps engineer with{' '}
              <strong>10+ shipped projects</strong>. I focus on clean architecture,
              performance, and getting applications into production — not just demos.
            </p>
            <p>
              Platforms I&apos;ve built and deployed include{' '}
              <strong>Vissioon</strong>, <strong>TalentSource</strong>,{' '}
              <strong>Done Workspace</strong>, and <strong>MailCub</strong> —
              business sites, SaaS products, auth systems, and third-party
              integrations. I own the path from code to cloud: servers, containers,
              pipelines, and uptime.
            </p>
          </div>
          <dl className="about-stats">
            <div>
              <dt>10+</dt>
              <dd>Projects delivered</dd>
            </div>
            <div>
              <dt>5+</dt>
              <dd>Years building</dd>
            </div>
            <div>
              <dt>100%</dt>
              <dd>Client satisfaction</dd>
            </div>
          </dl>
        </div>

        <ul className="about-services">
          {services.map((service) => (
            <li key={service.title} className="service-item">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
