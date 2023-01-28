import React from 'react';
import { IPartnerFooterProps } from './partner-footer.type';

import './partner-footer.style.scss';
import { partnersData } from 'src/mocks';

export const prefixClassPartnerFooter = 'partner-footer';

export const PartnerFooter: React.FC<IPartnerFooterProps> = () => {
	return (
		<div className={`${prefixClassPartnerFooter}`}>
			<div className="container">
				<div className={`${prefixClassPartnerFooter}__heading`}>
					TỰ HÀO LÀ ĐỐI TÁC CỦA
				</div>
				<div className={`${prefixClassPartnerFooter}__entry`}>
					{partnersData.map((partner, index) => {
						const { logo, title, time } = partner;
						return (
							<div key={index} className={`${prefixClassPartnerFooter}__item`}>
								<a href="#">
									<img
										src={logo}
										alt="logo"
										className={`${prefixClassPartnerFooter}__logo`}
									/>
								</a>
								<div className={`${prefixClassPartnerFooter}__title`}>
									{title}
								</div>
								<div className={`${prefixClassPartnerFooter}__time`}>
									{time}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
