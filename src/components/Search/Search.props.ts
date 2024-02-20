import React from 'react';

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
	isValid?: boolean;
}