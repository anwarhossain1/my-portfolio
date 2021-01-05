import React from 'react';
import CardsItem from './CardsItem/CardsItem';
import './Cards.css';
import img2 from '../../images/react-prac.png';
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
                    />
                    <CardsItem
                    text='This E-commerce site is still under development.'
                    label='React, React Hooks, React Router, React Hook Forms, Material UI, CommerceJS Api'
                    path='/services'
                    im={img2}
                    />

                </ul>
                <ul className="cards__items">
                    <CardsItem
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    path='/services'
                    />
                    <CardsItem
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    path='/services'
                    />

                </ul>
                

                </div>
                
                
            </div>
            
        </div>
    )
}

export default Cards
