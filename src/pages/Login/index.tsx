import React from 'react';
import { Headling } from '../../components/Headling';
import { Input } from '../../components/Input';

import './Login.css';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const onSubmitLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <Headling className="login__headling">Вход</Headling>
      <form className="login__form" onSubmit={onSubmitLogin}>
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
        <div className="login__button">
          <Button type="submit" appearance="big">
            Вход
          </Button>
        </div>
      </form>
			<div className='sign-up__ask'>
				<p>Нет акканута?</p>
				<Link to='/auth/register' className='sign-up__link'>
					Зарегистрироваться
				</Link>
			</div>
    </>
  );
};

export default Login;
