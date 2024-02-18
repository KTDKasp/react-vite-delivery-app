import React from 'react';
import { ButtonProps } from './Button.props';

import './Button.css';

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button className={`button accent`} {...props}>{children}</button>
	)
}
