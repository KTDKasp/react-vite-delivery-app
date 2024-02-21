import React from 'react';
import { HeadlingProps } from './Headling.props';

import './Headling.css';

export const Headling: React.FC<HeadlingProps> = ({ children, ...props }) => {
	return (
		<h1 className='headling' {...props}>{children}</h1>
	);
};
