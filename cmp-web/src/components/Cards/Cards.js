import React from 'react';
import CardsItem from './CardsItem/CardsItem';
import './Cards.css';
import img1 from '../../images/react-prac.png';
import img2 from '../../images/IMG1.png';
import img3 from '../../images/react-prac.png';
function Cards() {
    return (
        <div className='cards'>
            <h1>My Works So Far</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className="cards__items">
                    <CardsItem
                    text='Simple Todo Apps developed with React, React Hooks and Redux'
                    label='React, React Hooks And Redux'
                    path='/projects'
                    im={img2}
                    />
                    <CardsItem
                    text='This E-commerce site is still under development.'
                    label='React, React Hooks, React Router, React Hook Forms, Material UI, CommerceJS Api'
                    path='/services'
                    im={img1}
                    />

                </ul>
                <ul className="cards__items">
                    <CardsItem
                    text='...'
                    label='Upcoming Projects'
                    path='/services'
                    />
                    <CardsItem
                    text='...'
                    label='Upcoming Projects'
                    path='/services'
                    />

                </ul>
                

                </div>
                
                
            </div>
            
        </div>
    )
}

export default Cards
