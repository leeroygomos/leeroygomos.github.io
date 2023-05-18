import React from 'react';
import './App.scss';

import ScrollIntoView from './components/Animations';
import Navigation from './components/Navigation';

function App() {
  const options = {
    root: null,
    rootMargin: '25% 0px',
    threshold: 0.5,
  };

  const [headerRef, isHeaderVisible] = ScrollIntoView(options);
  const [aboutRef, isAboutVisible] = ScrollIntoView(options);
  const [projectsRef, isProjectsVisible] = ScrollIntoView(options);
  const [experienceRef, isExperienceVisible] = ScrollIntoView(options);

  return (
    <div className="App">
      <Navigation />

      <header ref={headerRef} className={isHeaderVisible ? "show item__header" : "hidden item__header"}>
          Lee Roy Gomos
      </header>
      
      <div ref={aboutRef} className={isAboutVisible ? "show item__about" : "hidden item__about"}>
        About Me
      </div>

      <div ref={projectsRef} className={isProjectsVisible ? "show item__projects" : "hidden item__projects"}>
        Projects
      </div>
      
      <div ref={experienceRef} className={isExperienceVisible ? "show item__experience" : "hidden item__experience"}>
        Experience
      </div>

    </div>
  );
}

export default App;
