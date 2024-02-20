import React from 'react';
import { Headling } from '../../components/Headling';
import { Search } from '../../components/Search';

import './Menu.css';

export const Menu: React.FC = () => {
	return (
		<div className="menu">
			<div className="menu__header">
				<Headling>Меню</Headling>
				<Search placeholder="Введите блюдо или состав" />
			</div>
		</div>
	);
};
