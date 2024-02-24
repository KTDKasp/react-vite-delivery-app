import React from 'react';
import axios, { AxiosError } from 'axios';

import { Headling } from '../../components/Headling';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { PREFIX } from '../../helpers/API';
import { LoginResponse } from '../../interfaces/auth.interface';

import './Login.css';

export type LoginForm = {
  email: {
    value: string
  },
  password: {
    value: string
  }
};

const Login: React.FC = () => {
  const [errorLogin, setErrorLogin] = React.useState<string | null>();
  const navigate = useNavigate();

  const onSubmitLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorLogin(null);
    const target = event.target as typeof event.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
        email,
        password
      });
      localStorage.setItem('jwt', data.access_token);
      navigate('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorLogin(error.response?.data.message);
      }
    }
  };

  return (
    <>
      <Headling className="login__headling">Вход</Headling>
      {errorLogin && <div className='error-login'>{errorLogin}</div>}
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
