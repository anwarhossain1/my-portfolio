import React from 'react';
import CardsItem from './CardsItem/CardsItem';
import './Cards.css'
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
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    path='/services'
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
