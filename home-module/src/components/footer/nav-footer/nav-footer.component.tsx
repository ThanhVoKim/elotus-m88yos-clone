import React from 'react';
import { INavFooterProps } from './nav-footer.type';

import './nav-footer.style.scss';
import {
	footerLocalizedData,
	footerMediaData,
	footerNavData,
	paymentsFooterData,
} from 'src/mocks';

export const prefixClassNavFooter = 'nav-footer';

export const NavFooter: React.FC<INavFooterProps> = () => {
	return (
		<div className={`${prefixClassNavFooter}`}>
			<div className="container">
				<div className={`${prefixClassNavFooter}__entry`}>
					<div className={`${prefixClassNavFooter}__payments-media`}>
						<div className={`${prefixClassNavFooter}__payments`}>
							<p className={`${prefixClassNavFooter}__payments-text`}>
								Phương thức thanh toán:
							</p>
							<div className={`${prefixClassNavFooter}__payments-list`}>
								{paymentsFooterData.map((payment, index) => {
									const { logo, colorLogo, path } = payment;
									return (
										<a
											key={index}
											href={path}
											className={`${prefixClassNavFooter}__payment-item`}
										>
											<img
												src={logo}
												alt="logo"
												className={`${prefixClassNavFooter}__payment-logo`}
											/>
											<img
												src={colorLogo}
												alt="color logo"
												className={`${prefixClassNavFooter}__payment-color-logo`}
											/>
										</a>
									);
								})}
							</div>
						</div>
						<div className={`${prefixClassNavFooter}__media`}>
							{footerMediaData.map((media, index) => (
								<a
									key={index}
									href={media.path}
									className={`${prefixClassNavFooter}__media-link ${media.className}`}
									style={{ mask: `url(${media.logo})` }}
								/>
							))}
						</div>
					</div>
					<div className={`${prefixClassNavFooter}__nav-page`}>
						<div className={`${prefixClassNavFooter}__nav-list`}>
							{footerNavData.map((nav, index) => (
								<a
									key={index}
									href={nav.path}
									className={`${prefixClassNavFooter}__nav-item`}
								>
									{nav.title}
								</a>
							))}
						</div>
					</div>
					<div className={`${prefixClassNavFooter}__nav-localized`}>
						<div className={`${prefixClassNavFooter}__nav-list`}>
							{footerLocalizedData.map((localized, index) => (
								<a
									key={index}
									href={localized.path}
									className={`${prefixClassNavFooter}__nav-item`}
								>
									{localized.title}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
