import React, { useState } from 'react';
import './Projects.css';

const ProjectRow = ({ project }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="project-row">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-media"
        aria-label={`Open ${project.name}`}
      >
        {!imageError && (
          <img
            src={project.image}
            alt=""
            className="project-image"
            style={{ opacity: imageLoaded ? 1 : 0 }}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(false);
            }}
          />
        )}
        {(imageError || !imageLoaded) && (
          <div className="project-fallback" aria-hidden="true">
            <span>{project.name}</span>
          </div>
        )}
      </a>

      <div className="project-body">
        <p className="project-category">{project.category}</p>
        <h3 className="project-name">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
        </h3>
        <p className="project-description">{project.description}</p>
        {project.stack?.length > 0 && (
          <ul className="project-stack">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          {project.linkLabel || 'Visit project'}
        </a>
      </div>
    </article>
  );
};

const Projects = () => {
  const projects = [
    {
      name: 'NetiFend',
      url: 'https://apps.apple.com/app/netifend/id6739185934',
      description:
        'iOS scam-protection utility with community spam blocking, AI scam search, Safari ad blocking, and real-time alerts. Built the backend APIs for spam sync, alerts, and subscription features.',
      category: 'iOS utility · Backend',
      stack: ['Backend APIs', 'Spam sync', 'Scam alerts', 'Subscriptions'],
      image: `${process.env.PUBLIC_URL}/images/netifend.jpg`,
      linkLabel: 'View on App Store',
    },
    {
      name: 'Vissioon',
      url: 'https://vissioon.co/',
      description:
        'All-in-one sales and marketing platform for funnels, landing pages, email campaigns, checkouts, and membership portals — helping creators turn knowledge into revenue.',
      category: 'Sales & marketing SaaS',
      stack: ['Sales funnels', 'Email campaigns', 'Memberships', 'Checkout'],
      image: `${process.env.PUBLIC_URL}/images/vissioon.png`,
    },
    {
      name: 'TalentSource',
      url: 'https://talentsourceplatform.com/',
      description:
        'Professional networking platform connecting employers, partners, and job seekers to post jobs, share opportunities, and grow industry networks.',
      category: 'Talent & networking SaaS',
      stack: ['Job board', 'Candidate portal', 'Employer login', 'Insights'],
      image: `${process.env.PUBLIC_URL}/images/TalentSource.png`,
    },
    {
      name: 'Done Workspace',
      url: 'https://doneworkspace.com/',
      description:
        'Team productivity workspace for projects, task assignment, priorities, calendars, automatic timesheets, and client collaboration in one place.',
      category: 'Productivity SaaS',
      stack: ['Task management', 'Timesheets', 'Team chat', 'Dashboards'],
      image: `${process.env.PUBLIC_URL}/images/Done.png`,
    },
    {
      name: 'MailCub',
      url: 'https://mailcub.com/',
      description:
        'Transactional email API and business email hosting for OTPs, receipts, and alerts — with SPF/DKIM/DMARC, delivery logs, and inbox-focused sending.',
      category: 'Email infrastructure SaaS',
      stack: ['Transactional API', 'Email hosting', 'SPF/DKIM/DMARC', 'Delivery logs'],
      image: `${process.env.PUBLIC_URL}/images/mailcub.png`,
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <header className="projects-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Production work across mobile, SaaS, and full delivery stacks.
          </p>
        </header>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
