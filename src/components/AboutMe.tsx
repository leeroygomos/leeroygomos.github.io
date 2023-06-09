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
                <h2>Experience</h2>
                <div className='experience'>
                    {/* TODO: MAKE REUSABLE COMPONENT */}
                    <div className='experience-item'>
                        <div className='date'>
                            <p>June 2022 - March 2023 <br/>
                            </p>
                        </div>
                        <div className='content'>
                            <h4>Technical Consultant - Salesforce</h4>
                            <ul>
                                <li>
                                    Built a custom web application form using Salesforce's Lightning Web Components framework, utilizing Javascript, HTML and CSS for the frontend                                
                                </li>
                                <li>
                                    Developed backend processes with Apex and database transactions with SOQL
                                </li>
                                <li>
                                    Actively engage with client on feature and design decisions with regular standups, grooming sessions, and retrospectives
                                </li>
                                <li>
                                    Participated in code reviews with internal team to ensure excellent code quality
                                </li>
                                <li>
                                    Developed and facilitated training for new developers in LWC and Aura
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='experience-item'>
                        <div className='date'>
                            <p>August 2021 - May 2022 <br/>
                            </p>
                        </div>
                        <div className='content'>
                            <h4>Associate Developer - Traction on Demand (acquired by Salesforce)</h4>
                            <ul>
                                    <li>
                                        In collaboration with the client’s Business Technology team, designed and refactored their Salesforce case management system for technical debt
                                    </li>
                                    <li>
                                        Rewrote Apex code to align with enterprise design patterns via the FFLIB framework for Apex triggers
                                    </li>
                                    <li>
                                        ewrote Apex code to align with enterprise design patterns via the FFLIB framework for Apex triggers
                                    </li>
                                    <li>
                                        Employed Salesforce’s Platform Events to handle async processes                                    
                                    </li>
                                    <li>
                                        eveloped unit and functional tests for Apex code via the Apex Mocks library to allow for mocking and stubbing
                                    </li>
                                </ul>
                        </div>
                    </div>
                    <div className='experience-item'>
                        <div className='date'>
                            <p>January 2021 - August 2021</p>
                        </div>
                        <div className='content'>
                            <h4>Developer Intern - Traction on Demand (acquired by Salesforce)</h4>
                            <ul>
                                <li>
                                    Analyzed and documented client Salesforce system for technical debt; designed and refactored for a more optimal and scalable configuration
                                </li>
                                <li>
                                    Worked in an agile scrum with the client’s Business Technology team
                                </li>
                                <li>
                                    Presented design solutions to client team and stakeholders for approval
                                </li>
                                <li>
                                Utilized Confluence and LucidChart for documentation, Jira for project management, Github and Gearset for CI/CD
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-container'>
                <h2>Skills</h2>
                <div className='skills-section'>
                    <h5>Languages</h5>
                    {languages.map(language => {return <Tag key={language} text={language} size='large'/>})}
                </div>
                <div className='skills-section'>
                    <h5>Libraries and Frameworks</h5>
                    {frameworks.map(framework => {return <Tag key={framework} text={framework} size='large'/>})}
                </div>
                <div className='skills-section'>
                    <h5>Technologies</h5>
                    {technologies.map(tech => {return <Tag key={tech} text={tech} size='large'/>})}
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