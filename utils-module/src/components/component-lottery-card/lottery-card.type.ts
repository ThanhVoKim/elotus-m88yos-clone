export interface ILotteryCard {
	path?: string;
	background?: string;
	logo?: string;
	title?: string;
	describe?: string;
	quantity?: string;
}

export interface ILotteryCardProps {
	lotteryCard: ILotteryCard;
	onPlayClick?: () => void;
}
