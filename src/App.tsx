import React, {useEffect} from 'react';
import './App.scss';

import ScrollIntoView from './components/Animations';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Toast from './components/Toast';

function App() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };

  const [currentPage, setCurrentPage] = React.useState('home');

  const [headerRef, isHeaderVisible] = ScrollIntoView(options);
  const [aboutRef, isAboutVisible] = ScrollIntoView(options);
  const [projectsRef, isProjectsVisible] = ScrollIntoView(options);
  const [contactRef, isContactVisible] = ScrollIntoView(options);

  const [status, setStatus] = React.useState('Success');
  const [msg, setMsg] = React.useState('');
  const [toastVisible, setToastVisible] = React.useState(false);
  const [timestamp, setTimestamp] = React.useState(Date.now());

  const showToast = (status:string, msg:string) => {
    if (status === 'Success') {
      setStatus('Success');
      setMsg(msg);
    }
    else if (status === 'Error') {
      setStatus('Error');
      setMsg(msg);
    }
    setTimestamp(Date.now());
    setToastVisible(true);
    setTimeout(() => {
          setToastVisible(false);
        }, 4000);
  }

  useEffect(() => {
    if (isHeaderVisible){
      setCurrentPage('home')
    }
    else if (isAboutVisible){
      setCurrentPage('aboutme')
    }
    else if (isProjectsVisible){
      setCurrentPage('projects')
    }
    else if (isContactVisible){
      setCurrentPage('contact')
    }
  },[isHeaderVisible,isAboutVisible,isProjectsVisible,isContactVisible]);

  return (
    <div className="App">
      <Navigation currentPage={currentPage}/>
      <Toast visible={toastVisible} status={status === 'Success' ? 'Success' : 'Failed'} message={msg} timestamp={timestamp}/>
      <section id='home' ref={headerRef} className={isHeaderVisible ? "show item__header" : "hidden item__header"}>
        <div>
          <h1>Lee Roy Gomos</h1>
          <p>Full Stack Developer</p>
        </div>
      </section>
      <section id='aboutme' ref={aboutRef} className={isAboutVisible ? "show item__about" : "hidden item__about"}>
        <AboutMe />
      </section>
      <section id='projects' ref={projectsRef} className={isProjectsVisible ? "show item__projects" : "hidden item__projects"}>
        <Projects />
      </section>
      <section id='contact' ref={contactRef} className={isContactVisible ? "show item__contact" : "hidden item__contact"}>
        <Contact showToast={showToast}/>
      </section>
      <footer className="footer">
        <div className='info'>
          Built with <a href='https://react.dev/' target='_blank' rel='noreferrer'>React</a> and <a href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>Typescript</a><br/>
          Styled with <a href='https://sass-lang.com/' target='_blank' rel='noreferrer'>Sass</a><br/>
          Contact form utilizes <a href='https://www.emailjs.com/' target='_blank' rel='noreferrer'>EmailJS</a><br/>
          View <a href='https://github.com/leeroygomos/portfolio-v3' target='_blank' rel='noreferrer'>Source Code</a>
        </div>
        <div className='copy'>
          &copy; 2023 Lee Roy Gomos. All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
