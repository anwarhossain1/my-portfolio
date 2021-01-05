import React from 'react';
import {Link} from 'react-router-dom';
import img from '../../../images/IMG1.png';
function CardsItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img 
                    src={props.im} 
                    alt="ss"
                    className='cards__item__img'/> 
                    
                </figure>
                <div className="cards__item__info">
                    <h5 className='cards__item__text'>{props.text}</h5>

                </div>
                
                </Link>
            </li>
            
            
        </>
    )
}

export default CardsItem
