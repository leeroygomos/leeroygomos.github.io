import './Contact.scss';

export default function Contact(){
    return (
        <div className='grid-container__contact'>
            <div className='left-container'>
                <p>
                    I am currently open to new opportunities. Feel free to connect with me on LinkedIn or email me at leeroy.gomos@gmail.com
                </p>
            </div>

            <div className='right-container'>
                <h1>Contact Me</h1>
                <form className='email-form'>
                    <label htmlFor='subject'>Subject</label>
                    <input type='text' name='subject' id='subject' />
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name' />
                    <label htmlFor='fromEmail'>Email</label>
                    <input type='text' name='fromEmail' id='fromEmail' />
                    <label htmlFor='body'>Body</label>
                    <textarea name='body' id='body'>body</textarea>
                </form>
            </div>
        </div>
    );
}