import { useRef } from 'react';

import './Contact.scss';
import IconGithub from './icons/IconGithub';
import IconLinkedin from './icons/IconLinkedin';
import emailjs from '@emailjs/browser';

export default function Contact(props: {showToast: (status:string, msg:string) => void}){
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (evnt: React.FormEvent<HTMLFormElement>) => {
        evnt.preventDefault();
        if (form.current === null) {
            props.showToast('Failed', 'Message failed to send. Please try again.');
            return;
        };
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID!, process.env.REACT_APP_TEMPLATE_ID!, form.current, process.env.REACT_APP_PUBLIC_KEY!)
            .then((result) => {
                props.showToast('Success', 'Your message has been sent!');
                form.current?.reset();
            }, (error) => {
                props.showToast('Failed', error.text);
            });
    }

    return (
        <div className='grid-container__contact'>
            <div className='left-container'>
                <p>
                    I am currently open to new job opportunities! Feel free send me a message, 
                    connect with me on LinkedIn or directly email me at <a href="mailto:leeroy.gomos@gmail.com">leeroy.gomos@gmail.com</a>
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
                <form className='email-form' ref={form} onSubmit={sendEmail}>
                    <div className='email-form-item'>
                        <label htmlFor='from_name'>Name</label>
                        <input type='text' name='from_name' id='from_name' required/>
                    </div>
                    <div className='email-form-item'>
                        <label htmlFor='from_email'>Email</label>
                        <input type='text' name='from_email' id='from_email' required/>
                    </div>
                    <div className='body'>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' name="message" required />
                    </div>
                    <div className='submit'>
                        <input className='button' type='submit' value='Send'/>
                    </div>
                </form>
            </div>
        </div>
    );
}