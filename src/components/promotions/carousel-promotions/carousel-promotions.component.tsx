import React from 'react';
import { ICarouselPromotionsProps } from './carousel-promotions.type';

import './carousel-promotions.style.scss';
import { carouselPromotionsData, highlightedPromotions } from 'src/mocks';
import { AreaTitle } from 'src/components/area-title';
import { PromotionCard } from 'src/components/promotion-card';
import { Carousel } from 'src/components/carousel';

export const prefixClassCarouselPromotions = 'carousel-promotions';

export const CarouselPromotions: React.FC<ICarouselPromotionsProps> = () => {
	return (
		<div className={`${prefixClassCarouselPromotions}`}>
			{carouselPromotionsData.map((carouselData, carouselIndex) => {
				const { areaTitle, navTitle, navPath, data } = carouselData;
				return (
					<div
						key={carouselIndex}
						className={`${prefixClassCarouselPromotions}__section`}
					>
						<div className="container">
							<AreaTitle
								title={areaTitle}
								navTitle={navTitle}
								navPath={navPath}
							/>
							<div className={`${prefixClassCarouselPromotions}__list`}>
								<Carousel
									carouselId={`promotionsCarousel-${String(carouselIndex)}`}
								>
									{data.map((promotionCard, index) => (
										<Carousel.Item key={index}>
											<div className={`${prefixClassCarouselPromotions}__item`}>
												<PromotionCard promotionCard={promotionCard} />
											</div>
										</Carousel.Item>
									))}
								</Carousel>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
