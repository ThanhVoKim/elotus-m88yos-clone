export interface ILiveCasioCard {
	path?: string;
	background?: string;
	baccarat?: number;
	sicbo?: number;
	roulette?: number;
	size?: 'md' | 'lg';
}

export interface ILiveCasioCardProps {
	liveCasioCard: ILiveCasioCard;
}
