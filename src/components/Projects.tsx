import { useState } from 'react';
import './Projects.scss';
import Card from './Card';
import {projectItems} from './constants';

export default function Projects(){
    const [currentProject, setCurrentProject] = useState(projectItems[0]);

    const selectProject = (index : number) => {
        setCurrentProject(projectItems[index]);
    }

    return (
        <div className='grid-container__projects'>
            <div className='left-container'>
                <h2>Projects</h2>
                <div className='items'>
                    {projectItems.map((item, index) => {
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
                    { currentProject.link ? <button className='button' onClick={() => window.open(currentProject.link, '_blank')}>View App!</button> : <></> }
                    { currentProject.github ? <button className='button' onClick={() => window.open(currentProject.github, '_blank')}>Github</button> : <></> }
                </div>
            </div>
        </div>
    );
}