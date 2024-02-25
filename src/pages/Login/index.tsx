import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Headling } from '../../components/Headling';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { AppDispatch, RootState } from '../../store/store';
import { login, userActions } from '../../store/user.slice';
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
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, loginErrorState } = useSelector((state: RootState) => state.user);

  React.useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);

  const onSubmitLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(userActions.clearLoginError());
    const target = event.target as typeof event.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };


  const sendLogin = async (email: string, password: string) => {
    dispatch(login({email, password}));
  };

  return (
    <>
      <Headling>Вход</Headling>
      {loginErrorState && <div className='error-login'>{loginErrorState}</div>}
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
