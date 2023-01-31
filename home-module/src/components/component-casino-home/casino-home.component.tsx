import React from 'react';
import { ICasinoHomeProps } from './casino-home.type';

import './casino-home.style.scss';
import {
	AreaTitle,
	Carousel,
	GameCard,
	toggleLoginModalAction,
} from '@m88yos/utils';
import { casioGameCardData } from 'src/mocks';

export const prefixClassCasinoHome = 'casino-home';

export const CasinoHome: React.FC<ICasinoHomeProps> = () => {
	const handlePlayClick = () => {
		toggleLoginModalAction(true);
	};

	return (
		<div className={`${prefixClassCasinoHome}`}>
			<div className="container">
				<AreaTitle title="Casino" navTitle="Xem tất cả sản phẩm" />

				<div className={`${prefixClassCasinoHome}__carousel`}>
					<Carousel carouselId={prefixClassCasinoHome}>
						{casioGameCardData.map((data, index) => (
							<Carousel.Item key={index}>
								<div className={`${prefixClassCasinoHome}__carousel-item`}>
									<GameCard gameCard={data} onPlayClick={handlePlayClick} />
								</div>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};
