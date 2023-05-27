import './AboutMe.scss';
import '../App.scss';
import Tag from './Tag';
import { languages, frameworks, technologies, certifications } from './constants';

export default function AboutMe(){
    return (
        <div className='grid-container__about'>
            <div className='left-container'>
                <div className='header'>
                    <h2>About Me</h2>
                    <p>I'm a former Salesforce developer with a passion for building custom solutions.
                        With a background in technical consulting, I thrive in Agile environments and enjoy collaborating with my team to deliver innovative solutions. 
                        Explore my portfolio to discover projects like the Online Code Editor, a robust full-stack web app for executing code, and FitnessBuddy, 
                        a feature-rich fitness application with real-time chat functionality.
                        <br/>
                        <br/>
                        Outside of coding, I love staying active through working out, exploring new recipes in the kitchen, and indulging in my favorite video 
                        games during my downtime.
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
                            <p>
                                Built a custom web application form using Salesforce's Lightning Web Components framework and developed back-end automation using Apex, SOQL, and Salesforce declarative configuration. Worked in an Agile scrum environment with regular release cycles, engaging with clients for design discussions, code reviews, grooming sessions, and retrospectives.
                            </p>
                        </div>
                    </div>
                    <div className='experience-item'>
                        <div className='date'>
                            <p>January 2021 - August 2021</p>
                        </div>
                        <div className='content'>
                            <h4>Developer Intern - Traction on Demand</h4>
                            <p>
                                Collaborated with the client development team to refactor existing systems, addressing technical debt and enhancing scalability. Provided comprehensive technical documentation for the client, while also implementing enterprise design architecture and conducting thorough testing to ensure code correctness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-container'>
                <h2>Skills</h2>
                <div className='skills-section'>
                    <h5>Languages</h5>
                    {languages.map(language => {return <Tag key={language} text={language} size='x-large'/>})}
                </div>
                <div className='skills-section'>
                    <h5>Frameworks</h5>
                    {frameworks.map(framework => {return <Tag key={framework} text={framework} size='x-large'/>})}
                </div>
                <div className='skills-section'>
                    <h5>Technologies</h5>
                    {technologies.map(tech => {return <Tag key={tech} text={tech} size='x-large'/>})}
                </div>
                <div className='certifications'>
                    <h5>Certifications</h5>
                    <div className='cert-badges'>
                        {certifications.map(cert => {return <img key={cert.name} src={cert.img} alt={cert.name}/>})}
                    </div>
                </div>
            </div>  
        </div>
    );
}