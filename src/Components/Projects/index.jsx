import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../constants/portfolioData';
import './styles.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header text-center">
          <h2>Featured Projects</h2>
          <p>A showcase of my recent work and technical expertise</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="projects-footer text-center">
          <p className="text-muted">
            Interested in seeing more of my work?
          </p>
          <a 
            href="https://github.com/alihaiderwebdev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;