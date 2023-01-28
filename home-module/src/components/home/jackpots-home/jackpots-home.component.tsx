import React from 'react';
import { IJackpotsHomeProps } from './jackpots-home.type';
import { AreaTitle } from 'src/components/area-title';

import './jackpots-home.style.scss';
import { Carousel } from 'src/components/carousel';
import { LotteryCard } from 'src/components/lottery-card';
import { lotteryCardData } from 'src/mocks';
export const prefixClassJackpotsHome = 'jackpots-home';

export const JackpotsHome: React.FC<IJackpotsHomeProps> = () => {
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
									<LotteryCard lotteryCard={data} />
								</div>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};
