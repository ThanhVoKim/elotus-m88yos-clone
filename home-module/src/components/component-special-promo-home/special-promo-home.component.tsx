import React from 'react';
import { ISpecialHomeProps } from './special-promo-home.type';
import { AreaTitle } from '@m88yos/utils';

import baccaratImage from 'src/assets/special-promo/baccarat-km-en.jpg';
import sicboImage from 'src/assets/special-promo/sicbo-km-en.jpg';
import taixiuImage from 'src/assets/special-promo/taixiu-km-en.jpg';
import xocdiaImage from 'src/assets/special-promo/xocdia-km-en.jpg';
import wideImage from 'src/assets/special-promo/wide-big-1.jpg';
import v8Image from 'src/assets/special-promo/V8_vi-VN.jpg';

import './special-promo-home.style.scss';
export const prefixClassSpecialHome = 'special-promo-home';

export const SpecialPromoHome: React.FC<ISpecialHomeProps> = () => {
	return (
		<div className={`${prefixClassSpecialHome}`}>
			<div className="container">
				<AreaTitle title="Sản phẩm khác" />
				<div className={`${prefixClassSpecialHome}__entry`}>
					<div className={`${prefixClassSpecialHome}__entry-left`}>
						<a
							href="#"
							className={`${prefixClassSpecialHome}__row-span poster`}
						>
							<img
								src={wideImage}
								alt="king master"
								className={`${prefixClassSpecialHome}__image`}
							/>
						</a>
						<div className={`${prefixClassSpecialHome}__list`}>
							<a
								href="#"
								className={`${prefixClassSpecialHome}__list-item poster`}
							>
								<img
									src={baccaratImage}
									alt="game"
									className={`${prefixClassSpecialHome}__image`}
								/>
								<div className={`title`}>Baccarat</div>
							</a>
							<a
								href="#"
								className={`${prefixClassSpecialHome}__list-item poster`}
							>
								<img
									src={sicboImage}
									alt="game"
									className={`${prefixClassSpecialHome}__image`}
								/>
								<div className={`title`}>Sic bo</div>
							</a>
							<a
								href="#"
								className={`${prefixClassSpecialHome}__list-item poster`}
							>
								<img
									src={taixiuImage}
									alt="game"
									className={`${prefixClassSpecialHome}__image`}
								/>
								<div className={`title`}>Tai xiu</div>
							</a>
							<a
								href="#"
								className={`${prefixClassSpecialHome}__list-item poster`}
							>
								<img
									src={xocdiaImage}
									alt="game"
									className={`${prefixClassSpecialHome}__image`}
								/>
								<div className={`title`}>Xoc dia</div>
							</a>
						</div>
					</div>
					<a
						href="#"
						className={`${prefixClassSpecialHome}__entry-right poster`}
					>
						<img
							src={v8Image}
							alt="new feature"
							className={`${prefixClassSpecialHome}__image`}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};
