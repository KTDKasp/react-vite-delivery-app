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

  };

  const remove = () => {

  };

  return (
    <div className="cart-item">
      <img src={props.image} alt="Фото продукта" />
      <div className='cart-item__desc'>
        <h2 className='cart-item__name'>{props.name}</h2>
        <div className='cart-item__curr'>{props.price}&nbsp;₽</div>
      </div>
      <div className='cart-item__actions'>
        <button className='action-button' onClick={decrease}>
          <img src="/minus-icon.svg" alt="Иконка минуса" />
        </button>
        <div>{props.count}</div>
        <button className='action-button' onClick={increase}>
          <img src="/plus-icon.svg" alt="Иконка плюса" />
        </button>       
      </div>
      <button className='cart-item__delete' onClick={remove}>
        <img src="/delete-icon.svg" alt="Кнопка удаления" />
      </button>
    </div>
  );
};
