import './Contact.scss';
import IconGithub from './icons/IconGithub';
import IconLinkedin from './icons/IconLinkedin';

export default function Contact(){
    return (
        <div className='grid-container__contact'>
            <div className='left-container'>
                <p>
                    I am currently open to new opportunities. Feel free to connect with me on LinkedIn or email me at leeroy.gomos@gmail.com
                </p>
                <div className='icons'>
                    <a href='https://github.com/leeroygomos' target='_blank' rel='noreferrer'>
                        <IconGithub />
                    </a>
                    <a href='https://www.linkedin.com/in/lee-roy-gomos-6077b1125/' target='_blank' rel='noreferrer'>
                        <IconLinkedin />
                    </a>
                </div>
            </div>

            <div className='right-container'>
                <h1>Contact Me</h1>
                <form className='email-form'>
                    <div className='name'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' id='name' />
                    </div>
                    <div className='email'>
                        <label htmlFor='fromEmail'>Email</label>
                        <input type='text' name='fromEmail' id='fromEmail' />
                    </div>
                    <div className='body'>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message'></textarea>
                    </div>
                    <div className='submit'>
                        <input className='button' type='submit' value='Submit' />
                    </div>
                </form>
            </div>
        </div>
    );
}