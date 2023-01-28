import React from 'react';
import { IInfoFooterProps } from './info-footer.type';

import './info-footer.style.scss';
import { footerProvidersData, footerSponsorshipData } from 'src/mocks';

export const prefixClassInfoFooter = 'info-footer';

export const InfoFooter: React.FC<IInfoFooterProps> = () => {
	return (
		<div className={`${prefixClassInfoFooter}`}>
			<div className="container">
				<div className={`${prefixClassInfoFooter}__provider`}>
					<div className={`${prefixClassInfoFooter}__provider-list`}>
						{footerProvidersData.map((provider, index) => {
							const { background, className, path } = provider;
							return (
								<a
									key={index}
									href={path}
									className={`${prefixClassInfoFooter}__provider-item `}
								>
									<div
										style={{ backgroundImage: `url(${background})` }}
										className={`${prefixClassInfoFooter}__provider-logo ${className}`}
									/>
									<div
										style={{ backgroundImage: `url(${background})` }}
										className={`${prefixClassInfoFooter}__provider-logo ${className} hover`}
									/>
								</a>
							);
						})}
					</div>
				</div>

				<div className="separation-line" />
				<div className={`${prefixClassInfoFooter}__sponsorship`}>
					<div className={`${prefixClassInfoFooter}__sponsorship-heading`}>
						TÀI TRỢ TRƯỚC ĐÂY
					</div>
					<div className={`${prefixClassInfoFooter}__sponsorship-list`}>
						{footerSponsorshipData.map((item, index) => {
							const { title, time, logo } = item;
							return (
								<div
									key={index}
									className={`${prefixClassInfoFooter}__sponsorship-item`}
								>
									<img
										src={logo}
										alt="sponsorship logo"
										className={`${prefixClassInfoFooter}__sponsorship-logo`}
									/>
									<div
										className={`${prefixClassInfoFooter}__sponsorship-content`}
									>
										<div
											className={`${prefixClassInfoFooter}__sponsorship-title`}
										>
											{title}
										</div>
										<div
											className={`${prefixClassInfoFooter}__sponsorship-time`}
										>
											{time}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
