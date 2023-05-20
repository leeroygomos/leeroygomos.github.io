import './Projects.scss';
import Card from './Card';
import {projectItems} from './constants';

export default function Projects(){
    return (
        <div className='grid-container__projects'>
            <div className='left-container'>
                {projectItems.map((item) => {
                    return <Card key={item.title} name={item.title} imgUrl={item.img} tags={item.tags}/>
                })}
            </div>
            <div className='right-container'>
                <h2 className='header'>Projects</h2>
                <div className='content'>
                    <p className='body'>I have a wide variety of projects ranging from web application and some other stuff</p>
                </div>
            </div>
        </div>
    );
}