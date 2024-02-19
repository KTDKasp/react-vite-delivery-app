import React from 'react';
import { ButtonProps } from './Button.props';

import './Button.css';

export const Button: React.FC<ButtonProps> = ({ children, appearance = 'small', ...props }) => {
	return (
		<button 
			className={`button accent ${
				appearance === 'small' ? 'small' : 'big'
			}`} 
			{...props}
		>
			{children}
		</button>
	);
};
