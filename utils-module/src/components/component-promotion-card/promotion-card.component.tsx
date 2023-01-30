import React from 'react';
import { IPromotionCardProps } from './promotion-card.type';
import { Button } from '../index';

import './promotion-card.style.scss';
import { timerIcon } from '../../assets';

export const prefixClassPromotionCard = 'promotion-card';

export const PromotionCard: React.FC<IPromotionCardProps> = (props) => {
	const { promotionCard } = props;
	const {
		background,
		path,
		title,
		detail,
		categories = [],
		daysLeft,
	} = promotionCard;

	return (
		<div className={`${prefixClassPromotionCard}`}>
			<img
				src={background}
				alt="background"
				className={`${prefixClassPromotionCard}__background`}
			/>
			<div className={`${prefixClassPromotionCard}__days-left`}>
				<img src={timerIcon} alt="timerIcon" />
				<p>{daysLeft}</p>
			</div>

			<div className={`${prefixClassPromotionCard}__info`}>
				<div className={`ribbons`}>
					{categories.map((category, index) => (
						<div key={index} className={`${category} ribbon`}>
							{category}
						</div>
					))}
				</div>
				<div className={`${prefixClassPromotionCard}__title`}>{title}</div>
				{detail && (
					<div className={`${prefixClassPromotionCard}__detail`}>{detail}</div>
				)}
				<div className={`${prefixClassPromotionCard}__actions`}>
					<Button color="primary" size="sm">
						Đăng kí
					</Button>
					<Button color="secondary" size="sm">
						Chi tiết
					</Button>
				</div>
			</div>
		</div>
	);
};
