import './Navigation.scss';

export default function Navigation(props: {currentPage: string}){
    return(
        <div className="navigation">
            <div className={props.currentPage === 'home' ? "nav_item__selected" : "nav_item"}>
                <a href='#home'>Home</a>
            </div>
            <div className={props.currentPage === 'aboutme' ? "nav_item__selected" : "nav_item"}>
                <a href='#aboutme'>About Me</a>
            </div>
            <div className={props.currentPage === 'projects' ? "nav_item__selected" : "nav_item"}>
                <a href='#projects'>Projects</a>
            </div>
            <div className={props.currentPage === 'contact' ? "nav_item__selected" : "nav_item"}>
                <a href='#contact'>Contact Me</a>
            </div>
        </div>
    );
}