import React from 'react';
import { ILotteryCardProps } from '.';
import { Button } from '../index';

import './lottery-card.style.scss';

export const prefixClassLotteryCard = 'lottery-card';

export const LotteryCard: React.FC<ILotteryCardProps> = (props) => {
	const { lotteryCard } = props;
	const { title, quantity, background, logo, describe } = lotteryCard;

	return (
		<div className={`${prefixClassLotteryCard}`}>
			<img
				src={background}
				className={`${prefixClassLotteryCard}__background`}
			/>
			<div className={`${prefixClassLotteryCard}__heading`}>
				<div className={`${prefixClassLotteryCard}__title`}>{title}</div>
				<img src={logo} className={`${prefixClassLotteryCard}__logo`} />
			</div>
			<div className={`${prefixClassLotteryCard}__details`}>
				<p>
					{describe}{' '}
					<span className={`${prefixClassLotteryCard}__primary`}>
						{quantity}
					</span>
				</p>
			</div>
			<div className={`${prefixClassLotteryCard}__button`}>
				<Button color="primary" size="sm">
					Chơi ngay
				</Button>
			</div>
		</div>
	);
};
