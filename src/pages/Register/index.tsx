import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Headling } from '../../components/Headling';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import './Register.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { register, userActions } from '../../store/user.slice';

export type RegisterForm = {
  email: {
    value: string
  },
  password: {
    value: string
  },
  name: {
    value: string;
  }
};

const Register: React.FC = () => {
  const { jwt, registerErrorState } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);

  const onSubmitRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(userActions.clearRegisterError());
    const target = event.target as typeof event.target & RegisterForm;    
    const { email, name, password } = target;
    dispatch(register({email: email.value, password: password.value, name: name.value}));
  };

  return (
    <>
      <Headling>Регистрация</Headling>
      {registerErrorState && <div className='error-login'>{registerErrorState}</div>}
      <form className="login__form" onSubmit={onSubmitRegister}>
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
        <label className="login__label" htmlFor="name">
          Ваше имя
        </label>
        <Input
          type="text"
          placeholder="Имя"
          id="name"
          name="name"
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
