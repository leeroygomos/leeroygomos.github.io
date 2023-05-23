import React from 'react';
import './App.scss';

import ScrollIntoView from './components/Animations';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };

  const [headerRef, isHeaderVisible] = ScrollIntoView(options);
  const [aboutRef, isAboutVisible] = ScrollIntoView(options);
  const [projectsRef, isProjectsVisible] = ScrollIntoView(options);
  const [contactRef, isContactVisible] = ScrollIntoView(options);

  return (
    <div className="App">
      <Navigation />
      <section ref={headerRef} className={isHeaderVisible ? "show item__header" : "hidden item__header"}>
        <div>
          <h1>Lee Roy Gomos</h1>
          <p>Full Stack Developer</p>
        </div>
      </section>
      <section ref={aboutRef} className={isAboutVisible ? "show item__about" : "hidden item__about"}>
        <AboutMe />
      </section>
      <section ref={projectsRef} className={isProjectsVisible ? "show item__projects" : "hidden item__projects"}>
        <Projects />
      </section>
      <section ref={contactRef} className={isContactVisible ? "show item__contact" : "hidden item__contact"}>
        <Contact />
      </section>
      <footer className="footer">FOOTER</footer>
    </div>
  );
}

export default App;
