export type TCategoriesPromotion =
	| 'claimed'
	| 'recommended'
	| 'active'
	| 'new-members'
	| 'rebate'
	| 'rebate'
	| 'live-casino'
	| 'sports'
	| 'esports'
	| 'casino-games'
	| 'keno-lotto'
	| 'vip'
	| 'local-promotions'
	| 'rewards'
	| 'new'
	| 'casino-ribbon'
	| 'leaderboard'
	| 'v8poker'
	| 'p2p'
	| 'reload';

export interface IPromotionCard {
	path?: string;
	background?: string;
	title?: string;
	detail?: string;
	daysLeft?: string;
	categories?: TCategoriesPromotion[];
}

export interface IPromotionCardProps {
	promotionCard: IPromotionCard;
}
