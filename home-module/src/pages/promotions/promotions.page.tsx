import { SeoContent } from 'src/components/seo-content';
import { Banner } from 'src/components/banner';

import { homeBannerData, homeSeoContent } from 'src/mocks';
import './promotions.style.scss';
import { FiltersPromotions } from 'src/components/promotions';
import { CarouselPromotions } from 'src/components/promotions/carousel-promotions';

export const prefixClassPromotions = 'promotions';

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
