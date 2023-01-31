import React from 'react';
import { IJackpotsHomeProps } from './jackpots-home.type';
import {
	AreaTitle,
	Carousel,
	LotteryCard,
	toggleLoginModalAction,
} from '@m88yos/utils';

import './jackpots-home.style.scss';

import { lotteryCardData } from 'src/mocks';
export const prefixClassJackpotsHome = 'jackpots-home';

export const JackpotsHome: React.FC<IJackpotsHomeProps> = () => {
	const handlePlayClick = () => {
		toggleLoginModalAction(true);
	};

	return (
		<div className={`${prefixClassJackpotsHome}`}>
			<div className="container">
				<AreaTitle
					title="Jackpots"
					navTitle="Xem tất cả trò chơi"
					navPath="#"
				/>
				<div className={`${prefixClassJackpotsHome}__carousel`}>
					<Carousel carouselId={prefixClassJackpotsHome}>
						{lotteryCardData.map((data, index) => (
							<Carousel.Item key={index}>
								<div className={`${prefixClassJackpotsHome}__carousel-item`}>
									<LotteryCard
										lotteryCard={data}
										onPlayClick={handlePlayClick}
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
