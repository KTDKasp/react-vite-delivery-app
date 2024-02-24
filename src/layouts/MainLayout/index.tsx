import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

import './MainLayout.css';

export const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/auth/login');
  };

  return (
    <div className="layout">
      <div className="layout__sidebar">
        <div className='sidebar__user'>
          <img className='sidebar__pic' src="/profile-pic-circle.png" alt="Фото профиля" />
          <h2 className='sidebar__username'>Джек Лондон</h2>
          <p className='sidebar__email'>london@ya.ru</p>
        </div>
        <div className='sidebar__nav'>
          <NavLink to="/" className='sidebar__link'>
            <img src="/menu-icon.svg" alt="Иконка меню" />
            Меню
          </NavLink>
          <NavLink to="/cart" className='sidebar__link'>
            <img src="/cart-icon.svg" alt="Иконка корзины" />
            Корзина
          </NavLink>
        </div>
        <Button onClick={onClickLogout} className="exit-button">
          <img src="/on-off.svg" alt="Выход" />
          <span>Выйти</span>
        </Button>
      </div>
      <main className='layout__main'>
        <Outlet />
      </main>
    </div>
  );
};
