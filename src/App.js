import React, { lazy, Suspense } from 'react';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import './global.css';

// Lazy load pages
const Home = lazy(() => import('./Components/Pages/Home/home'));
const About = lazy(() => import('./Components/Pages/About/about'));
const Skills = lazy(() => import('./Components/Pages/Skills/skills'));
const Projects = lazy(() => import('./Components/Pages/Projects/projects'));
const Contact = lazy(() => import('./Components/Pages/Contact/contact'));

// Simple loading component
const Loading = () => <div className="loading">Loading...</div>;

// Scroll to top wrapper
const ScrollToTop = ({ children }) => {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="content-wrapper">
        <ScrollToTop>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </main>
      <Footer />
    </div>
  );
};

export default App;