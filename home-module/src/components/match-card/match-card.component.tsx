import React from 'react';
import { IMatchCardProps } from './match-card.type';

import './match-card.style.scss';

export const prefixClassMatchCard = 'match-card';

export const MatchCard: React.FC<IMatchCardProps> = (props) => {
	const { match } = props;
	const { title, teamA, teamB, logoTeamA, logoTeamB, date } = match;

	return (
		<div className={`${prefixClassMatchCard}`}>
			<div className={`${prefixClassMatchCard}__league`}>
				<div className={`${prefixClassMatchCard}__league-title`}>{title}</div>
				<div className={`${prefixClassMatchCard}__league-date`}>{date}</div>
			</div>
			<div className={`${prefixClassMatchCard}__team`}>
				<div className={`${prefixClassMatchCard}__team-left`}>
					<div className={`${prefixClassMatchCard}__team-name`}>{teamA}</div>
					<div className={`${prefixClassMatchCard}__team-name`}>{teamB}</div>
				</div>
				<div className={`${prefixClassMatchCard}__team-right`}>
					<div className={`${prefixClassMatchCard}__team-logo`}>
						<img src={logoTeamA} alt="team logo" />
					</div>
					<div className={`${prefixClassMatchCard}__team-logo`}>
						<img src={logoTeamB} alt="team logo" />
					</div>
				</div>
			</div>
			<div className={`${prefixClassMatchCard}__odd`}>
				<div className={`${prefixClassMatchCard}__odd-crest`}>
					<p className={`${prefixClassMatchCard}__odd-crest-text`}>HDP -1.5</p>
					<p className={`${prefixClassMatchCard}__odd-crest-text`}>-0.99</p>
				</div>
				<div className={`${prefixClassMatchCard}__odd-crest`}>
					<p className={`${prefixClassMatchCard}__odd-crest-text`}>HDP -1.5</p>
					<p className={`${prefixClassMatchCard}__odd-crest-text`}>-0.99</p>
				</div>
			</div>
		</div>
	);
};
