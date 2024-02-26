import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Headling } from '../../components/Headling';

import './Cart.css';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import { Products } from '../../interfaces/product.interface';
import { CartItem } from '../../components/CartItem';

export const Cart: React.FC = () => {
  const [cartProducts, setCartProducts] = React.useState<Products[]>([]);
  const items = useSelector((state: RootState) => state.cart.items);

  const getCartItem = async (id: number) => {
    const { data } = await axios.get<Products>(`${PREFIX}/products/${id}`);
    return data;
  };

  const loadAllItems = async () => {
    const res = await Promise.all(items.map((item) => getCartItem(item.id)));
    setCartProducts(res);
  };

  React.useEffect(() => {
    loadAllItems();
  }, [items]);

  return (
    <div className="cart">
      <div className="cart__header">
        <Headling>Корзина</Headling>
      </div>
      <div className="cart__list">
        {items.map((item) => {
          const product = cartProducts.find((obj) => obj.id === item.id);
          if (!product) {
            return;
          }
          return <CartItem key={product.id} count={item.count} {...product} />;
        })}
      </div>
    </div>
  );
};
