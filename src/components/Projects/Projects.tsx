import { useState } from 'react';
import './Projects.scss';
import Card from '../Card/Card';
import {projectItems} from '../constants';

const showcasedProjectItems = projectItems.filter(item => item.showcase === true);

export default function Projects(){
    const [currentProject, setCurrentProject] = useState(showcasedProjectItems[0]);

    const selectProject = (index : number) => {
        setCurrentProject(showcasedProjectItems[index]);
    }

    return (
        <div className='grid-container__projects'>
            <div className='left-container'>
                <h2>Projects</h2>
                <div className='extended-projects'><a href='/AllProjects' target='_blank'>View full project archive</a></div>
                <div className='items'>
                    {showcasedProjectItems.map((item, index) => {
                        return <Card key={index} 
                                    name={item.title} 
                                    imgUrl={item.img} 
                                    tags={item.tags}
                                    onClick={() => selectProject(index)}  
                                    currentProject={currentProject.title}  
                                />
                    })}
                </div>
            </div>
            <div className='right-container'>
                <img className='image' src={currentProject.img} alt={currentProject.title} />
                <h3>{currentProject.title}</h3>
                <div className='content'>
                    <p>{currentProject.description}</p>
                    { currentProject.demoUser ? <p className='demo'>{currentProject.demoUser}</p> : <></> }
                    { currentProject.demoPass ? <p className='demo'>{currentProject.demoPass}</p> : <></> }
                    { currentProject.link ? <button className='button' onClick={() => window.open(currentProject.link, '_blank')}>View App!</button> : <></> }
                    { currentProject.github ? <button className='button' onClick={() => window.open(currentProject.github, '_blank')}>Github</button> : <></> }
                </div>
            </div>
        </div>
    );
}