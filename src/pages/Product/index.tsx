import React, { Suspense } from 'react';
import { Await, useLoaderData, useNavigate } from 'react-router-dom';
import { Products } from '../../interfaces/product.interface';
import { Headling } from '../../components/Headling';
import { Button } from '../../components/Button';

import './Product.css';
import { cartActions } from '../../store/cart.slice';
import { useDispatch } from 'react-redux';

export const Product: React.FC = () => {
	const data = useLoaderData() as { data: Products };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCart = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(cartActions.add(data.data.id));
  };

	return (
		<Suspense fallback={<>Загрузка...</>}>
			<Await resolve={data.data}>
				{({ data }: { data: Products }) => (
					<div className="product">
						<div className="product__header">
							<button className="product__back" onClick={() => navigate('/')}>
								<img src="/arrow-back-icon.svg" alt="Вернуться назад" />
							</button>
							<Headling>{data.name}</Headling>
							<Button onClick={addToCart} appearance="small" className="product__in-cart">
								<img
									src="/card-add-icon.svg"
									alt="Кнопка добавления в корзину"
								/>
								В корзину
							</Button>
						</div>
						<div className="product__content">
							<div className="product__image-wrapper">
								<img src={data.image} alt="Изображение блюда" />
							</div>
							<div className="product__info">
								<div className="product__info-text">
									<div className="product__text">
										<div>Цена</div>
										<div>{data.price}&nbsp;<span className='product__curr'>₽</span></div>
									</div>
									<hr className="hr" />
									<div className="product__text">
										<div>Рейтинг</div>
										<div className="product__rating">
											{data.rating}&nbsp;
											<img src="/rating-icon.svg" alt="Иконка рейтинга" />
										</div>
									</div>
								</div>
								<div className="product__description">
                  <div className='description-text'>Состав:</div>
									<ul className='description-list'>
										{data.ingredients.map((ingredient: string) => (
											<li className='product__ingredient' key={ingredient}>{ingredient}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				)}
			</Await>
		</Suspense>
	);
};
