import { useState, useEffect } from 'react';

import './Toast.scss';
import IconCheck from './icons/IconCheck';
import IconError from './icons/IconError';

export default function Toast(props: {visible: boolean, status: string, message: string, timestamp: number}){
    const [className, setClassName] = useState('');
    
    useEffect(() => {
        let className = '';
        if(props.status === 'Success'){
            className = 'toast-container__success';
        }else{
            className = 'toast-container__failure';
        }

        if (props.visible === true){
            className += ' show-toast';
        }
        else {
            className +=' hidden-toast';
        }
        setClassName(className);
    }, [props.visible, props.status, props.timestamp]);
    
    return(
        <div className={className} 
            style={{opacity: (props.visible ? 1 : 0)}}>
            <button onClick={() => setClassName(className.replace('show-toast', 'hidden-toast'))}>x</button>
            <div className='icon'>
                {props.status === 'Success' ? <IconCheck/> : <IconError/>}
            </div>
            <div className='text'>
                <h3>{props.status}!</h3>
                <p>{props.message}</p>
            </div>
        </div>
    );
}