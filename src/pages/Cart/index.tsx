import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Headling } from '../../components/Headling';

import './Cart.css';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import { Products } from '../../interfaces/product.interface';
import { CartItem } from '../../components/CartItem';
import { Button } from '../../components/Button';
import { cartActions } from '../../store/cart.slice';
import { useNavigate } from 'react-router-dom';

const DELIVERY_FEE = 169;

export const Cart: React.FC = () => {
  const [cartProducts, setCartProducts] = React.useState<Products[]>([]);
  const [promocodeValue, setPromocodeValue] = React.useState<string>('');
  const [discount, setDiscount] = React.useState<number>(0);
  const items = useSelector((state: RootState) => state.cart.items);
  const jwt = useSelector((state: RootState) => state.user.jwt);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const total = items
    .map((item) => {
      const product = cartProducts.find((obj) => obj.id === item.id);
      if (!product) {
        return 0;
      }
      return item.count * product.price;
    })
    .reduce((acc, sum) => (acc += sum), 0);

  React.useEffect(() => {
    loadAllItems();
  }, [items]);

  const getCartItem = async (id: number) => {
    const { data } = await axios.get<Products>(`${PREFIX}/products/${id}`);
    return data;
  };

  const loadAllItems = async () => {
    const res = await Promise.all(items.map((item) => getCartItem(item.id)));
    setCartProducts(res);
  };

  const onSubmitPromocode = (event: React.FormEvent) => {
    event.preventDefault();
    if (promocodeValue === 'KTDKasp') {
      setDiscount(200);
    }
  };

  const onChangePromocode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromocodeValue(event.target.value);
  };

  const onClickPayment = async () => {
    await axios.post(`${PREFIX}/order`, {
      products: items
    }, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });
    navigate('/success');
    dispatch(cartActions.emptyCartOnExit());
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <Headling>Корзина</Headling>
      </div>
      {items.length === 0 ? (
        <div>Корзина пуста. Заполните корзину продуктами!</div>
      ) : (
        <>
          <div className="cart__list">
            {items.map((item) => {
              const product = cartProducts.find((obj) => obj.id === item.id);
              if (!product) {
                return;
              }
              return (
                <CartItem key={product.id} count={item.count} {...product} />
              );
            })}
          </div>
          <form className="promocode-form" onSubmit={onSubmitPromocode}>
            <input
              value={promocodeValue}
              onChange={onChangePromocode}
              className="promocode-input"
              type="text"
              name="promocode"
              id="promocode"
              placeholder="Промокод"
            />
            <div className="promocode-btn">
              <Button appearance="small" type="submit">
                Применить
              </Button>
            </div>
          </form>
          {discount === 0 ? '' : <div className='valid-discount'>Поздравляю!</div>}
          <div className="cart__total">
            <div className="cart__total-calc">
              <div>Итог</div>
              <span>
                {total}&nbsp;<span className="curr">₽</span>
              </span>
            </div>
            <hr className="hr" />
            <div className="cart__total-calc">
              <div>Доставка</div>
              <span>
                {DELIVERY_FEE}&nbsp;<span className="curr">₽</span>
              </span>
            </div>
            {discount === 0 ? '' : <><hr className="hr" /><div className="cart__total-calc">
              <div>Промокод</div>
              <span>
                -{discount}&nbsp;<span className="curr">₽</span>
              </span>
            </div></>}
            <hr className="hr" />
            <div className="cart__total-calc">
              <div>
                Итог <span className="count">({items.length})</span>
              </div>
              <span>
                {total + DELIVERY_FEE - discount}&nbsp;<span className="curr">₽</span>
              </span>
            </div>
          </div>
          <div className="cart__payment">
            <Button appearance="big" onClick={onClickPayment}>
              Оформить
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
