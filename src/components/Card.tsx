import './Card.scss';
import Tag from './Tag';

export default function Card(props : {name: string, imgUrl?: string, tags: string[]}){
    return (
        <article className="card">
            <div className="card-body" style={{backgroundImage: (props.imgUrl ? `url(${props.imgUrl})` : '')}}>
                <div className="card-title">
                    <h3>{props.name}</h3>
                </div>
            </div>
            <div className="card-tags">
                {props.tags.map(tag =>{return <Tag text={tag}/>})}
            </div>
        </article>
    );
}