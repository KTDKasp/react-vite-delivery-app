import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '../components/Button';

import './MainLayout.css';

export const MainLayout: React.FC = () => {
  return (
    <div className="layout">
      <div className="layout__left">
        <div>
          <img src="./profile-pic-circle.png" alt="Фото профиля" />
        </div>
        <h2>Джек Лондон</h2>
        <p>london@ya.ru</p>
        <div>
          <Link to="/">Click to menu</Link>
          <Link to="/cart">Click to cart</Link>
        </div>
        <Button className="exit-button">
          <img src="./on-off.svg" alt="Выход" />
          <span>Выйти</span>
        </Button>
      </div>
      <div className="layout__border-line"></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
