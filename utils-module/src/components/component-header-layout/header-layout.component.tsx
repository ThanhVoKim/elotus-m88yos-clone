import React from 'react';
import { BottomHeader } from './bottom-header';
import { Navbar } from './navbar';
import { TopHeader } from './top-header';

import './header-layout.style.scss';

export const prefixClassHeader = 'header-layout';

export const HeaderLayout = () => {
	return (
		<div className={`${prefixClassHeader}`}>
			<TopHeader />
			<Navbar />
			<BottomHeader />
		</div>
	);
};
