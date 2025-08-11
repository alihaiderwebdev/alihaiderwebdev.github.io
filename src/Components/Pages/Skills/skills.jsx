import React, { useEffect } from 'react';
import './skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaMobileAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" />, level: 93 },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" />, level: 90 },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" />, level: 92 },
    { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7DF1E" />, level: 88 },
    { name: "React JS", icon: <FaReact color="#61DAFB" />, level: 85 },
    { name: "Responsive Design", icon: <FaMobileAlt color="#4CAF50" />, level: 94 },
    { name: "Git & GitHub", icon: <FaGithub color="#181717" />, level: 80 }
  ];

  useEffect(() => {
    const animateSkills = () => {
      const skillCards = document.querySelectorAll('.skill-card');
      skillCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (cardPosition < screenPosition) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
          const levelBar = card.querySelector('.skill-level-fill');
          if (levelBar) {
            const level = card.dataset.level;
            setTimeout(() => {
              levelBar.style.width = `${level}%`;
            }, index * 100);
          }
        }
      });
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills();
    return () => window.removeEventListener('scroll', animateSkills);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My <span>Skills</span></h2>
          <p className="section-subtitle">
            I’m Ali Haider — Junior Frontend Developer.  
            I build modern, responsive websites using the latest web technologies.  
            Open to internships and collaborations.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              data-level={skill.level}
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `all 0.5s ease ${index * 0.1}s`
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <div className="skill-level-fill" style={{ width: '0%' }}></div>
              </div>
              <span className="skill-percent">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
