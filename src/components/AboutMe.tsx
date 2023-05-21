import './AboutMe.scss';
import Tag from './Tag';
import { languages, frameworks, technologies, certifications } from './constants';

export default function AboutMe(){
    return (
        <div className='grid-container__about'>
            <div className='left-container'>
                <div className='header'>
                    <h2>About Me</h2>
                    <p>I am a Full Stack Web Developer with a passion for learning new technologies. 
                        I have a passion for learning new technologies, and I am passionate about learning new technologies.
                    </p>
                </div>
                <div className='experience'>
                    <h2>Experience</h2>
                    {/* TODO: MAKE REUSABLE COMPONENT */}
                    <div className='experience-item'>
                        <div className='date'>
                            <p>June 2022 - May 2023 <br/>
                                August 2021 - May 2022
                            </p>
                        </div>
                        <div className='content'>
                            <h4>Technical Consultant - Salesforce, <br/> Associate Developer - Traction on Demand</h4>
                            <p>I am a Full Stack Web Developer with a passion for learning new technologies. 
                                I have a passion for learning new technologies, and I am passionate about learning new technologies.</p>
                        </div>
                    </div>
                    <div className='experience-item'>
                        <div className='date'>
                            <p>January 2021 - August 2021</p>
                        </div>
                        <div className='content'>
                            <h4>Developer Intern - Traction on Demand</h4>
                            <p>I am a Full Stack Web Developer with a passion for learning new technologies. 
                                I have a passion for learning new technologies, and I am passionate about learning new technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-container'>
                <div className='skills'>
                    <h3>Skills</h3>
                </div>
                <div className='languages'>
                    <h5>Languages</h5>
                    {languages.map(language => {return <Tag key={language} text={language} size='x-large'/>})}
                </div>
                <div className='frameworks'>
                    <h5>Frameworks</h5>
                    {frameworks.map(framework => {return <Tag key={framework} text={framework} size='x-large'/>})}
                </div>
                <div className='technologies'>
                    <h5>Technologies</h5>
                    {technologies.map(tech => {return <Tag key={tech} text={tech} size='x-large'/>})}
                </div>
                <div className='certifications'>
                    <h5>Certifications</h5>
                    {certifications.map(cert => {return <Tag key={cert.name} text={cert.name} size='x-large'/>})}
                </div>
            </div>  
        </div>
    );
}