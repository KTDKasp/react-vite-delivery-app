import React from 'react';
import axios, { AxiosError } from 'axios';
import { Headling } from '../../components/Headling';
import { Search } from '../../components/Search';
import { ProductCard } from '../../components/ProductCard';
import { Products } from '../../interfaces/product.interface';
import { PREFIX } from '../../helpers/API';

import './Menu.css';

export const Menu: React.FC = () => {
	const [products, setProducts] = React.useState<Products[]>([]);
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState<string | null>();

	const getProducts = async () => {
		try {
			setIsLoading(true);
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			});
			const { data } = await axios.get<Products[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.log(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	React.useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="menu">
			<div className="menu__header">
				<Headling>Меню</Headling>
				<Search placeholder="Введите блюдо или состав" />
			</div>
			<div className="menu__content">
				{error && <div>{error}</div>}
				{!isLoading && products.map((product) => (
					<ProductCard
					key={product.id}
					id={product.id}
					price={product.price}
					name={product.name}
					ingredients={product.ingredients.join(', ')}
					rating={product.rating}
					image={product.image}
				/>
				))}
				{isLoading && <div>Загрузка продуктов...</div>}
			</div>
		</div>
	);
};
