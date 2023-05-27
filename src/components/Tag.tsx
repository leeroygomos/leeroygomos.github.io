import './Tag.scss';

export default function Tag( props: { text: string, size?: string } ){
    return (
        <button className="tag" style={{fontSize: (props.size ? props.size : 'medium')}}>
           {props.text}
        </button>
    )
}