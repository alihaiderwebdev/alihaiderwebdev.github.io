import React from 'react';
import SkillCard from './SkillCard';
import { skills } from '../../constants/portfolioData';
import './styles.css';

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend Technologies', skills: skills.frontend, icon: '💻' },
    { title: 'Backend Technologies', skills: skills.backend, icon: '⚙️' },
    { title: 'Tools & Technologies', skills: skills.tools, icon: '🛠️' },
    
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header text-center">
          <h2>Skills & Technologies</h2>
          <p>Technologies and tools I work with to bring ideas to life</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;