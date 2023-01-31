import React, { PropsWithChildren } from 'react';
import { FooterLayout, HeaderLayout, LoginPopup, RegisterPopup } from '../';

import './main-layout.style.scss';

export const prefixClassMain = 'main-layout';

export const MainLayout: React.FC<PropsWithChildren<unknown>> = (props) => {
	const { children } = props;
	return (
		<div className={`${prefixClassMain}`}>
			<header>
				<HeaderLayout />
			</header>
			<main>{children}</main>
			<footer>
				<FooterLayout />
			</footer>

			<RegisterPopup />
			<LoginPopup />
		</div>
	);
};
