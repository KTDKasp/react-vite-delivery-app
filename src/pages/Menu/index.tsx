import React from 'react';
import { Headling } from '../../components/Headling';
import { Search } from '../../components/Search';
import { ProductCard } from '../../components/ProductCard';

import './Menu.css';

export const Menu: React.FC = () => {
	return (
		<div className="menu">
			<div className="menu__header">
				<Headling>Меню</Headling>
				<Search placeholder="Введите блюдо или состав" />
			</div>
			<div className='menu__content'>
				<ProductCard 
					price={300} 
					title='Наслаждение' 
					description='Салями, руккола, помидоры, оливки'
					rating={4.5}
					imageUrl='./food-1.png'
				/>
			</div>
		</div>
	);
};
