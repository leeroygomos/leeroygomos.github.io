import './Card.scss';

export default function Card(props : {name: string, imgUrl: string, tags: string[]}){
    return (
        <article className="card">
            <div className="card-body" style={{backgroundImage: `url(${props.imgUrl})`}}>
                <div className="card-title">
                    <h3>{props.name}</h3>
                </div>
            </div>
            <div className="card-tags">
                {props.tags.map(tag =>{return <CardTag text={tag}/>})}
            </div>
        </article>
    );
}

function CardTag( props: { text: string } ){
    return (
        <button className="tag">
           {props.text}
        </button>
    )
}