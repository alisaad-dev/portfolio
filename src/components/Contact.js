import React from 'react';
import './Contact.css';

const Contact = () => {
  const links = [
    {
      title: 'GitHub',
      detail: 'Code and open work',
      href: 'https://github.com/alisaad-dev',
      label: 'View profile',
    },
    {
      title: 'LinkedIn',
      detail: 'Connect professionally',
      href: 'https://www.linkedin.com/in/ali-saad-523874204',
      label: 'View profile',
    },
    {
      title: 'Upwork',
      detail: 'Hire for freelance work',
      href: 'https://www.upwork.com/freelancers/~01464a9e29beccff5b?mp_source=share',
      label: 'View profile',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container contact-layout">
        <header className="contact-intro">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Open to new projects, collaborations, and full-time roles. Reach out
            where you already work.
          </p>
        </header>

        <ul className="contact-list">
          {links.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-row"
              >
                <div>
                  <h3 className="contact-title">{item.title}</h3>
                  <p className="contact-text">{item.detail}</p>
                </div>
                <span className="contact-action">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
