import React from 'react';
import './CartItem.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { CartItemProps } from './CartItem.props';

export const CartItem: React.FC<CartItemProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const increase = () => {
    dispatch(cartActions.add(props.id));
  };

  const decrease = () => {
    dispatch(cartActions.remove(props.id));
  };

  const remove = () => {
    dispatch(cartActions.delete(props.id));
  };

  return (
    <div className="cart-item">
      <img className="cart-item__img" src={props.image} alt="Фото продукта" />
      <div className="cart-item__desc">
        <h2 className="cart-item__name">{props.name}</h2>
        <div className="cart-item__curr">{props.price}&nbsp;₽</div>
      </div>
      <div className="cart-item__actions">
        <div className="action-count__wrapper">
          <button className="action-button minus" onClick={decrease} disabled={props.count === 1 ? true : false}>
            <img src="/minus-icon.svg" alt="Иконка минуса" />
          </button>
          <div className='action-count'>{props.count}</div>
          <button className="action-button plus" onClick={increase}>
            <img src="/plus-icon.svg" alt="Иконка плюса" />
          </button>
        </div>
        <button className="cart-item__delete" onClick={remove}>
          <img src="/delete-icon.svg" alt="Кнопка удаления" />
        </button>
      </div>
    </div>
  );
};
