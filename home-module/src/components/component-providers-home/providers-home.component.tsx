import React from 'react';
import { IProvidersHomeProps } from './providers-home.type';

import './providers-home.style.scss';
import { AreaTitle } from '@m88yos/utils';
import { providersHomeData } from 'src/mocks';
export const prefixClassProvidersHome = 'providers-home';
export const prefixClassProvider = 'provider';

export const ProvidersHome: React.FC<IProvidersHomeProps> = () => {
	return (
		<div className={`${prefixClassProvidersHome}`}>
			<div className="container">
				<AreaTitle title="Lọc Theo Nhà Cung Cấp" />
				<div className={`${prefixClassProvidersHome}__list`}>
					{providersHomeData.map((data, index) => (
						<div
							key={index}
							className={`${prefixClassProvidersHome}__list-item`}
						>
							<div className={`${prefixClassProvider}`}>
								<picture>
									<source
										media="(min-width: 768px)"
										srcSet={data.image}
										type="image/svg+xml"
									/>
									<img
										src={data.smallImage}
										alt="provide image"
										className={`${prefixClassProvider}__background`}
									/>
								</picture>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
