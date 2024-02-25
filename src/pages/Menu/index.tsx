import React from 'react';
import axios, { AxiosError } from 'axios';
import { Headling } from '../../components/Headling';
import { Search } from '../../components/Search';
import { ProductCard } from '../../components/ProductCard';
import { Products } from '../../interfaces/product.interface';
import { PREFIX } from '../../helpers/API';

import './Menu.css';

const Menu: React.FC = () => {
	const [products, setProducts] = React.useState<Products[]>([]);
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState<string | null>();
	const [searchValue, setSearchValue] = React.useState<string>();

	React.useEffect(() => {
		getProducts(searchValue);
	}, [searchValue]);

	const getProducts = async (name?: string) => {
		try {
			setIsLoading(true);
			const { data } = await axios.get<Products[]>(`${PREFIX}/products`, {
				params: {
					name
				}
			});
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

	const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className="menu">
			<div className="menu__header">
				<Headling>Меню</Headling>
				<Search value={searchValue} onChange={onChangeSearch} placeholder="Введите блюдо или состав" />
			</div>
			<div className="menu__content">
				{error && <div>{error}</div>}
				{!isLoading && products.length > 0 && products.map((product) => (
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
				{!isLoading && products.length === 0 && <>Нет таких товаров :^\</>}
				{isLoading && <div>Загрузка продуктов...</div>}
			</div>
		</div>
	);
};

export default Menu;
