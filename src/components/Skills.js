import React from 'react';
import './Skills.css';

const Skills = () => {
  const technologies = [
    'HTML5',
    'CSS',
    'JavaScript',
    'Node.js',
    'React',
    'Express',
    'MongoDB',
    'Docker',
    'AWS',
    'CI/CD',
    'Git',
  ];

  return (
    <section className="skills-bar" aria-label="Technologies">
      <div className="container">
        <ul className="skills-list">
          {technologies.map((tech) => (
            <li key={tech} className="skill-item">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
