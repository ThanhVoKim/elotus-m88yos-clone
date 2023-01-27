import React from 'react';
import { IFooterProps } from './footer.type';

import './footer.style.scss';
import {
	InfoFooter,
	PartnerFooter,
	NavFooter,
	ResponsibleFooter,
} from 'src/components/footer';

export const prefixClassFooter = 'footer';

export const Footer: React.FC<IFooterProps> = () => {
	return (
		<div className={`${prefixClassFooter}`}>
			<PartnerFooter />
			<NavFooter />
			<InfoFooter />
			<ResponsibleFooter />
		</div>
	);
};
