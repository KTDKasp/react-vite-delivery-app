import React from 'react';
import { ProductCardProps } from './ProductCard.props';

import './ProductCard.css';

export const ProductCard: React.FC<ProductCardProps> = ({ price, description, rating, imageUrl, title }) => {
  return (
    <div className='card'>
      <div className='card__top'>
        <div className='card__price'>
          {price} 
          <span> ₽</span>
        </div>
        <img className='card__image' src={imageUrl} alt="Фото блюда" />
        <button type='button' className='card__add'>
          <img src="./card-add-icon.svg" alt="Иконка корзины" />
        </button>
        <div className='card__rating'>
          {rating}
          <img src="./rating-icon.svg" alt="Иконка рейтинга" />
        </div>
      </div>
      <div className='card__bottom'>
        <div className='card__title'>{title}</div>
        <div className='card__description'>{description}</div>
      </div>
    </div>
  );
};
