import React from 'react';
import Header from './Components/Header/index.jsx';
import Hero from './Components/Hero/index.jsx';
import About from './Components/About/index.jsx';
import Skills from './Components/Skills/index.jsx';
import Projects from './Components/Projects/index.jsx';
import Contact from './Components/Contact/index.jsx';
import Footer from './Components/Footer/index.jsx';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;