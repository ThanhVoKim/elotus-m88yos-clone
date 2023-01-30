import React from 'react';

import './footer-layout.style.scss';
import { InfoFooter } from './info-footer';
import { NavFooter } from './nav-footer';
import { PartnerFooter } from './partner-footer';
import { ResponsibleFooter } from './responsible-footer';

export const prefixClassFooter = 'footer-layout';

export const FooterLayout: React.FC = () => {
	return (
		<div className={`${prefixClassFooter}`}>
			<PartnerFooter />
			<NavFooter />
			<InfoFooter />
			<ResponsibleFooter />
		</div>
	);
};
