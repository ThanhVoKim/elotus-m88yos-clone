import React from 'react';
import { ILiveCasioCardProps } from './live-casio-card.type';
import { Button } from '../index';

import './live-casio-card.style.scss';
import { baccaratIcon, sicboIcon, rouletteIcon } from '../../assets';

export const prefixClassLiveCasioCard = 'live-casio-card';

export const LiveCasioCard: React.FC<ILiveCasioCardProps> = (props) => {
	const { liveCasioCard, onClick } = props;
	const {
		background,
		path,
		baccarat,
		sicbo,
		roulette,
		size = 'md',
	} = liveCasioCard;

	return (
		<div
			className={`${prefixClassLiveCasioCard}`}
			onClick={() => {
				onClick?.();
			}}
		>
			<img
				src={background}
				alt="background"
				className={`${prefixClassLiveCasioCard}__background`}
			/>
			<div className={`${prefixClassLiveCasioCard}__info ${size}`}>
				<div className={`${prefixClassLiveCasioCard}__button`}>
					<Button size={size} color="primary">
						Chơi ngay
					</Button>
				</div>
				<div className={`${prefixClassLiveCasioCard}__details`}>
					<div className={`${prefixClassLiveCasioCard}__details-item ${size}`}>
						<div
							className={`icon`}
							style={{ maskImage: `url(${baccaratIcon})` }}
						/>
						<div className={`quantity`}>{baccarat}</div>
					</div>
					<div className={`${prefixClassLiveCasioCard}__details-item ${size}`}>
						<div
							className={`icon`}
							style={{ maskImage: `url(${sicboIcon})` }}
						/>
						<div className={`quantity`}>{sicbo}</div>
					</div>
					<div className={`${prefixClassLiveCasioCard}__details-item ${size}`}>
						<div
							className={`icon`}
							style={{ maskImage: `url(${rouletteIcon})` }}
						/>
						<div className={`quantity`}>{roulette}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
