import React from 'react';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

import './Success.css';

export const Success: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='success'>
      <div className='img__wrapper'>
      <img className='success__img' src="/pizza.png" alt="Изображение пиццы" />
      </div>
      <div className='success__text'>Ваш заказ успешно оформлен!</div>
      <Button appearance='big' onClick={() => navigate('/')}>Сделать новый</Button>
    </div>
  );
};
