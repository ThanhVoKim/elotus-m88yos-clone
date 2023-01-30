import { SeoContent, Banner } from '@m88yos/utils';
import { FiltersPromotions, CarouselPromotions } from 'src/components';

import { homeBannerData, homeSeoContent } from 'src/mocks';
import './promotions.style.scss';

export const prefixClassPromotions = 'promotions-page';

export const Promotions = () => {
	return (
		<div className={`${prefixClassPromotions}`}>
			<Banner bannerId={prefixClassPromotions} bannerData={homeBannerData} />
			<FiltersPromotions />
			<CarouselPromotions />
			<SeoContent data={homeSeoContent} />
		</div>
	);
};
