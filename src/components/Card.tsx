import './Card.scss';
import Tag from './Tag';

export default function Card(props : {name: string, imgUrl?: string, tags: string[], onClick: () => void, currentProject: string}) {
    
    return (
        <div className={props.currentProject === props.name ? "card__selected" : "card"} onClick={props.onClick}>
            <div className="card-body" style={{backgroundImage: (props.imgUrl ? `url(${props.imgUrl})` : '')}}>
                <div className={props.currentProject === props.name ? "card-title__selected" : "card-title"}>
                    <h3>{props.name}</h3>
                </div>
            </div>
            <div className="card-tags">
                {props.tags.map(tag =>{return <Tag key={tag} text={tag} size='small'/>})}
            </div>
        </div>
    );
}