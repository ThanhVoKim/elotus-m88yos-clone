import React from 'react';
import { BottomHeader, Navbar, TopHeader } from 'src/components/header';

import './header.style.scss';

export const prefixClassHeader = 'header';

export const Header = () => {
	return (
		<div className={`${prefixClassHeader}`}>
			<TopHeader />
			<Navbar />
			<BottomHeader />
		</div>
	);
};
