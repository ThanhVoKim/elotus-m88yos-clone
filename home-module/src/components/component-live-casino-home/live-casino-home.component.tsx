import React from 'react';
import { ILiveCasinoHomeProps } from './live-casino-home.type';

import './live-casino-home.style.scss';
import {
	AreaTitle,
	LiveCasioCard,
	Carousel,
	toggleLoginModalAction,
} from '@m88yos/utils';

import { liveCasioCardData, liveCasioHighlightCardData } from 'src/mocks';

export const prefixClassLiveCasinoHome = 'live-casino-home';

export const LiveCasinoHome: React.FC<ILiveCasinoHomeProps> = () => {
	const handleClickCard = () => {
		toggleLoginModalAction(true);
	};

	return (
		<div className={`${prefixClassLiveCasinoHome}`}>
			<div className="container">
				<AreaTitle title="Live Casino" navTitle="Xem tất cả sản phẩm" />
				<div className={`${prefixClassLiveCasinoHome}__highlight`}>
					{liveCasioHighlightCardData.map((data, index) => (
						<div
							key={index}
							className={`${prefixClassLiveCasinoHome}__highlight-item`}
						>
							<LiveCasioCard liveCasioCard={data} onClick={handleClickCard} />
						</div>
					))}
				</div>
				<div className={`${prefixClassLiveCasinoHome}__carousel`}>
					<Carousel carouselId={prefixClassLiveCasinoHome}>
						{liveCasioCardData.map((data, index) => (
							<Carousel.Item key={index}>
								<div className={`${prefixClassLiveCasinoHome}__carousel-item`}>
									<LiveCasioCard
										liveCasioCard={data}
										onClick={handleClickCard}
									/>
								</div>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};
