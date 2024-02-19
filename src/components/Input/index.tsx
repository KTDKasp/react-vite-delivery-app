import React from 'react';
import { InputProps } from './Input.props';

import './Input.css';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({ isValid = true, ...props }, ref) {
	return (
		<input type="text" ref={ref} className={`input ${isValid ? '' : 'invalid'}`} {...props}/>
	);
});

