import React from 'react';
import CardsItem from './CardsItem/CardsItem';
import './Cards.css';
import img1 from '../../images/react-prac.png';
import img2 from '../../images/IMG1.png';
import img3 from '../../images/burger.png';
function Cards() {
    return (
        <div className='cards'>
            <h1>My Works So Far</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className="cards__items">
                    <CardsItem
                    text='This E-commerce site is still under development.'
                    label='React, React Hooks, React Router, React Hook Forms, Material UI, CommerceJS Api'
                    im={img1}
                    
                    path='/projects'
                    
                    />
                    <CardsItem
                    text='Simple Todo Apps developed with React, React Hooks and Redux'
                    label='React, React Hooks And Redux'
                    path='/projects'
                    im={img2}
                    />

                </ul>
                <ul className="cards__items">
                    <CardsItem
                    text='Burger-khabo.com (Under Development)'
                    label='React, React Hooks ,Redux And Firebase'
                    path='/projects'
                    im={img3}
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
