import React, { useEffect } from 'react';
import './projects.css';

const projects = [
  {
    title: "Responsive Portfolio Website",
    description:
      "Designed and developed a modern, mobile-friendly portfolio using React JS, Tailwind CSS, and responsive design techniques.",
    results: ["Fully responsive UI", "Smooth animations", "SEO-friendly structure"],
    link: "#"
  },
  {
    title: "E-commerce Frontend",
    description:
      "Built a fully functional e-commerce frontend with product listings, filters, and cart functionality using React and Bootstrap.",
    results: ["Dynamic product rendering", "Reusable components", "Fast load times"],
    link: "#"
  },
  {
    title: "Landing Page with Tailwind CSS",
    description:
      "Created a high-converting landing page with clean UI, modern animations, and optimized performance.",
    results: ["Pixel-perfect layout", "Responsive design", "Optimized for speed"],
    link: "#"
  }
];

const Projects = () => {
  useEffect(() => {
    const animateProjects = () => {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (cardPosition < screenPosition) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', animateProjects);
    animateProjects();
    return () => window.removeEventListener('scroll', animateProjects);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My <span>Projects</span></h2>
          <p className="section-subtitle">
            A showcase of my work in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React JS
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `all 0.6s ease ${index * 0.15}s`
              }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-results">
                  {project.results.map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  className="project-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
