import React, { PropsWithChildren } from 'react';
import { Footer } from '../layout-footer';
import { Header } from '../layout-header';

import './main.style.scss';

export const prefixClassMain = 'main';

export const Main: React.FC<PropsWithChildren<unknown>> = (props) => {
	const { children } = props;
	return (
		<div className={`${prefixClassMain}`}>
			<header>
				<Header />
			</header>
			<main>{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};
