import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import snow from '../images/img-5.jpg'
import waterway from '../images/img-6.jpg'
import lake from '../images/img-7.jpg'
import night from '../images/img-8.jpg'
import waterfall from '../images/img-9.jpg'


function Cards() {
  return (
    <div className = 'cards'>
      <h1>Check out these destinations!</h1>
      <div className = 'cards__container'>
        <div className = 'cards__wrapper'>
          <ul className = 'cards__items'>
            <CardItem
            src = {snow}
            text = 'Feel the cool winter chill'
            label = 'Mountain'
            path = '/services'
            />
            <CardItem
            src = {waterfall}
            text = 'Hear the roaring waterfall'
            label = 'Waterfall'
            path = '/services'
            />
          </ul>
          <ul className = 'cards__items'>
          <CardItem
            src = {waterway}
            text = 'Scenic view and perhaps ducks?'
            label = 'Waterway'
            path = '/services'
            />
            <CardItem
            src = {lake}
            text = 'Sounds of nature flow in the air'
            label = 'Lake'
            path = '/services'
            />
            <CardItem
            src = {night}
            text = 'Sparkling light in the dark blue night'
            label = 'Night view'
            path = '/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards