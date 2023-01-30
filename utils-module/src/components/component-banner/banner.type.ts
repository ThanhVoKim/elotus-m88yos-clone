export interface IBannerItem {
	background?: string;
	icon?: string;
	title?: string;
	detail?: string;
	buttonTitle?: string;
}

export interface IBannerProps {
	bannerId: string;
	bannerData: IBannerItem[];
}
