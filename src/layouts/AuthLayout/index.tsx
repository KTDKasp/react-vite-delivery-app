import React from 'react';
import { Outlet } from 'react-router-dom';

import './AuthLayout.css';

export const AuthLayout: React.FC = () => {
	return (
		<div className="auth-layout">
			<div className="auth-layout__image">
				<img src="/app-logo.svg" alt="Логотип приложения" />
			</div>
			<div className="auth-layout__content">
				<div className="auth-layout__form">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
