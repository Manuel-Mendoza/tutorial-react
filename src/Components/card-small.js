/* eslint-disable no-redeclare */
import img from './img';



function Card_small(props){
    if(props.growth < 0){
        var imagen = img.down
    }else{
        var imagen = img.up
    };
    return(
        <div className="card-small">
            <p className="card-small-views">Page Views</p>
                <p className="card-small-icon">
                <img src={props.icono} alt="" />
            </p>
            <p className="card-small-number">{props.pageView}</p>
            <p className="card-small-percentage">
                <span>
                <img src={imagen} alt="" />
                {props.growth}%
                </span>
            </p>
        </div>
    );
}

export default Card_small;