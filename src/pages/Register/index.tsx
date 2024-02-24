import React from 'react';
import { Link } from 'react-router-dom';

import { Headling } from '../../components/Headling';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import './Register.css';

const Register: React.FC = () => {
  return (
    <>
      <Headling>Регистрация</Headling>
      <form className="login__form">
        <label className="login__label" htmlFor="email">
          Ваш email
        </label>
        <Input type="email" placeholder="Email" id="email" name="email" />
        <label className="login__label" htmlFor="password">
          Ваш пароль
        </label>
        <Input
          type="password"
          placeholder="Пароль"
          id="password"
          name="password"
        />
        <label className="login__label" htmlFor="password">
          Ваше имя
        </label>
        <Input
          type="password"
          placeholder="Имя"
          id="password"
          name="password"
        />
        <div className="login__button">
          <Button type="submit" appearance="big">
            Зарегистрироваться
          </Button>
        </div>
      </form>
      <div className="sign-up__ask">
        <p>Есть акканут?</p>
        <Link to="/auth/login" className="sign-up__link">
          Войти
        </Link>
      </div>
    </>
  );
};

export default Register;
