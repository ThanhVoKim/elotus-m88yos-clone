import React, { useState } from 'react';
import { ICarouselPromotionsProps } from './carousel-promotions.type';

import './carousel-promotions.style.scss';
import { carouselPromotionsData } from 'src/mocks';
import {
	AreaTitle,
	Carousel,
	IPromotionCard,
	Modal,
	PromotionCard,
} from '@m88yos/utils';
import { PopupPromotions } from '../component-popup-promotions';

export const prefixClassCarouselPromotions = 'carousel-promotions';

export const CarouselPromotions: React.FC<ICarouselPromotionsProps> = () => {
	const [promotionSelected, setPromotionSelected] =
		useState<IPromotionCard | null>(null);

	const handleClosePromotionPopup = () => {
		setPromotionSelected(null);
	};

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
											<div
												className={`${prefixClassCarouselPromotions}__item`}
												onClick={() => {
													setPromotionSelected(promotionCard);
												}}
											>
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

			<Modal
				open={!!promotionSelected}
				onCloseDialog={handleClosePromotionPopup}
			>
				<PopupPromotions promotionCard={promotionSelected} />
			</Modal>
		</div>
	);
};
