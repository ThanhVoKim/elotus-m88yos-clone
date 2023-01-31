import { IPromotionCard } from '@m88yos/utils';

export interface IPopupPromotionsProps {
	promotionCard: IPromotionCard | null;
	onClose?: () => void;
}
