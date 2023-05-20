import React from 'react';
import './App.scss';

import ScrollIntoView from './components/Animations';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  const options = {
    root: null,
    rootMargin: '30% 0px',
    threshold: 0.3,
  };

  const [headerRef, isHeaderVisible] = ScrollIntoView(options);
  const [aboutRef, isAboutVisible] = ScrollIntoView(options);
  const [projectsRef, isProjectsVisible] = ScrollIntoView(options);
  const [experienceRef, isExperienceVisible] = ScrollIntoView(options);

  return (
    <div className="App">
      <Navigation />
      <section ref={headerRef} className={isHeaderVisible ? "show item__header" : "hidden item__header"}>
        <h1>Lee Roy Gomos</h1>
        <p>Full Stack Developer</p>
      </section>
      <section ref={aboutRef} className={isAboutVisible ? "show item__about" : "hidden item__about"}>
        <AboutMe />
        {/* ABOUT ME */}
      </section>
      <section ref={projectsRef} className={isProjectsVisible ? "show item__projects" : "hidden item__projects"}>
        <Projects />
        {/* PROJECTS */}
      </section>
      <section ref={experienceRef} className={isExperienceVisible ? "show item__experience" : "hidden item__experience"}>
        Experience
      </section>

    </div>
  );
}

export default App;
