import img from "./img"


function Card(props){
    return(
        <article className={"card "+props.red}>
            <p className="card-title">
                <img src={props.icono} alt=" " />
                {props.username}
            </p>
            <p className="card-followers">
                <span className="card-followers-number">{props.followers}</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src={img.up} alt=" "></img>
                {props.siguiendo} Siguiendo
            </p>
        </article>
    );
}
export default Card;