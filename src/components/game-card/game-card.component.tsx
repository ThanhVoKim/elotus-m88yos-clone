import React from 'react';
import { IGameCardProps } from '.';
import { Button } from '../button';

import './game-card.style.scss';

export const prefixClassGameCard = 'game-card';

export const GameCard: React.FC<IGameCardProps> = (props) => {
	const { gameCard } = props;
	const { background, path, title, providerIcon, size = 'sm' } = gameCard;

	return (
		<div className={`${prefixClassGameCard}`}>
			<div className={`${prefixClassGameCard}__poster`}>
				<img
					src={background}
					alt="background"
					className={`${prefixClassGameCard}__background`}
				/>
				<div className={`${prefixClassGameCard}__overlay`} />
				<div className={`${prefixClassGameCard}__float`}>
					<Button size="sm" color="primary">
						Chơi ngay
					</Button>
					<Button size="sm" color="secondary">
						Chơi thử
					</Button>
				</div>
			</div>
			{size === 'sm' ? (
				<div className={`${prefixClassGameCard}__title `}>
					<img src={providerIcon} alt="provider icon" />
					<p className={`${prefixClassGameCard}__title-text `}>{title}</p>
				</div>
			) : null}
		</div>
	);
};
