import React from 'react';
import { ProductCardProps } from './ProductCard.props';

import './ProductCard.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  price,
  ingredients,
  rating,
  image,
  name
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const addToCart = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(cartActions.add(id));
  };

  return (
    <div className="card">
      <div className="card__top">
        <div className="card__price">
          {price}&nbsp;
          <span>₽</span>
        </div>
        <Link to={`/product/${id}`}>
          <img className="card__image" src={image} alt="Фото блюда" />
        </Link>
        <button type="button" className="card__add" onClick={addToCart}>
          <img src="/card-add-icon.svg" alt="Иконка корзины" />
        </button>
        <div className="card__rating">
          {rating}&nbsp;
          <img src="/rating-icon.svg" alt="Иконка рейтинга" />
        </div>
      </div>
      <div className="card__bottom">
        <div className="card__title">{name}</div>
        <div className="card__description">{ingredients}</div>
      </div>
    </div>
  );
};
