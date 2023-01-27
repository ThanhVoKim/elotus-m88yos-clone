import React from 'react';
import { ISportHomeProps } from './sport-home.type';

import matchBackground from 'src/assets/home/sports-steven-gerald-en.png';

import { MatchCard } from 'src/components/match-card';
import { AreaTitle } from 'src/components/area-title';
import { matchData, sportCardData } from 'src/mocks';

import './sport-home.style.scss';
import { Button } from 'src/components/button';
import { Carousel } from 'src/components/carousel';
import { SportCard } from 'src/components/sport-card';

export const prefixClassSportHome = 'sport-home';

export const SportHome: React.FC<ISportHomeProps> = () => {
	return (
		<div className={`${prefixClassSportHome}`}>
			<div className="container">
				<AreaTitle
					title="Thể Thao"
					navTitle="Xem tất cả sản phẩm"
					navPath="#"
				/>
			</div>
			<div className={`${prefixClassSportHome}__match`}>
				<div className="container">
					<div className={`${prefixClassSportHome}__match-entry`}>
						<img
							src={matchBackground}
							alt="background"
							className={`${prefixClassSportHome}__match-background`}
						/>
						<div className={`${prefixClassSportHome}__match-action`}>
							<Button size="lg" color="primary">
								Cược ngay
							</Button>
						</div>
						<div className={`${prefixClassSportHome}__match-carousel`}>
							<Carousel carouselId={`${prefixClassSportHome}-match`}>
								{matchData.map((match, index) => (
									<Carousel.Item key={index}>
										<MatchCard match={match} />
									</Carousel.Item>
								))}
							</Carousel>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className={`${prefixClassSportHome}__sports`}>
					<Carousel carouselId={`${prefixClassSportHome}-sports`}>
						{sportCardData.map((sportCard, index) => (
							<Carousel.Item key={index}>
								<SportCard sportCard={sportCard} />
							</Carousel.Item>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};
