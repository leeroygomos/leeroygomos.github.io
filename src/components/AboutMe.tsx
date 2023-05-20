import './AboutMe.scss';

export default function AboutMe(){
    return (
        <div className='grid-container__about'>
            <div className='left-container'>
                <h2 className='header'>About Me</h2>
                <div className='content'>
                    <p>I AM VERY SKILLFUL</p>
                </div>
            </div>
            <div className='right-container'>
                <div className='image'>
                    <img src='/images/profile.jpg' alt="Lee Roy Gomos profile"></img>
                </div>
                <p className='body'>I am a Full Stack Web Developer with a passion for learning new technologies. 
                    I have a passion for learning new technologies, and I am passionate about learning new technologies.
                </p>
            </div>  
        </div>
    );
}