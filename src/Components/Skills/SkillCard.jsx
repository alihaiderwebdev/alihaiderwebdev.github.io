import React from 'react';

const SkillCard = ({ title, skills, icon }) => {
  return (
    <div className="skill-card card">
      <div className="skill-header">
        <div className="skill-icon">{icon}</div>
        <h3>{title}</h3>
      </div>
      
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;