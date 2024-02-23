import React from 'react';
import { SearchProps } from './Search.props';

import './Search.css';

export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
	function Input({ isValid = true, ...props }, ref) {
		return (
			<div className="search__wrapper">
				<img
					className="search-icon"
					src="/search-icon.svg"
					alt="Иконка поиска"
				/>
				<input
					type="text"
					ref={ref}
					className={`search ${isValid ? '' : 'invalid'}`}
					{...props}
				/>
			</div>
		);
	}
);
