import React from 'react';
import { ICasinoHomeProps } from './casino-home.type';

import './casino-home.style.scss';
import { AreaTitle } from 'src/components/area-title';
import { casioGameCardData } from 'src/mocks';
import { Carousel } from 'src/components/carousel';
import { GameCard } from 'src/components/game-card';

export const prefixClassCasinoHome = 'casino-home';

export const CasinoHome: React.FC<ICasinoHomeProps> = () => {
	return (
		<div className={`${prefixClassCasinoHome}`}>
			<div className="container">
				<AreaTitle title="Casino" navTitle="Xem tất cả sản phẩm" />

				<div className={`${prefixClassCasinoHome}__carousel`}>
					<Carousel carouselId={prefixClassCasinoHome}>
						{casioGameCardData.map((data, index) => (
							<Carousel.Item key={index}>
								<div className={`${prefixClassCasinoHome}__carousel-item`}>
									<GameCard gameCard={data} />
								</div>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};
