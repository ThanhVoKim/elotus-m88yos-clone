import React from 'react';
import { ISportCardProps } from './sport-card.type';

import './sport-card.style.scss';
import { Button } from '../index';

export const prefixClassSportCard = 'sport-card';

export const SportCard: React.FC<ISportCardProps> = (props) => {
	const { sportCard } = props;
	const { background, path } = sportCard;

	return (
		<div className={`${prefixClassSportCard}`}>
			<img src={background} alt="background" />
			<div className={`${prefixClassSportCard}__info`}>
				<Button color="secondary" size="md">
					Cược ngay
				</Button>
			</div>
		</div>
	);
};
