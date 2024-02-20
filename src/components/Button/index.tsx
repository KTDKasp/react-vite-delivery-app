import React from 'react';
import { ButtonProps } from './Button.props';

import './Button.css';

export const Button: React.FC<ButtonProps> = ({ children, className, appearance = 'small', ...props }) => {
	return (
		<button 
			className={`button accent ${
				appearance === 'small' ? 'small' : 'big'
			} ${className}`} 
			{...props}
		>
			{children}
		</button>
	);
};
