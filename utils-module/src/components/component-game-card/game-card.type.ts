export interface IGameCard {
	path?: string;
	background?: string;
	providerIcon?: string;
	title?: string;
	size?: 'sm' | 'lg';
}

export interface IGameCardProps {
	gameCard: IGameCard;
	onPlayClick?: () => void;
}
